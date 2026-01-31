import { ref, watch, onMounted, onUnmounted, nextTick, type Ref } from 'vue';
import { clamp, bringToFront, removeFromStack, getContainerBounds } from '../utils/helpers';

export type DraggableOptions = {
  enabled?: boolean;
  defaultX?: number | string;
  defaultY?: number | string;
  snapThreshold?: number;
  snapToEdges?: boolean;
  constrainToContainer?: boolean;
};

export type DraggableEvents = {
  onDragStart?: (x: number, y: number) => void;
  onDragMove?: (x: number, y: number) => void;
  onDragEnd?: (x: number, y: number) => void;
  onPositionChange?: (x: number, y: number) => void;
};

export default function useDraggable(
  elementRef: Ref<HTMLElement | null>,
  handleRef: Ref<HTMLElement | null>,
  options: DraggableOptions = {},
  events: DraggableEvents = {},
  containerRef?: Ref<HTMLElement | null>
) {
  const {
    enabled = true,
    defaultX = 0,
    defaultY = 0,
    snapThreshold = 20,
    snapToEdges = false,
    constrainToContainer = true,
  } = options;

  const x = ref(Number(defaultX) || 0);
  const y = ref(Number(defaultY) || 0);
  const dragging = ref(false);
  const zIndex = ref(900);

  let startX = 0;
  let startY = 0;
  let elementId = '';

  // Get position from either mouse or touch event
  function getEventPosition(e: MouseEvent | TouchEvent) {
    if ('touches' in e) {
      const touch = e.touches[0] || e.changedTouches[0];
      return { clientX: touch.clientX, clientY: touch.clientY };
    }
    return { clientX: e.clientX, clientY: e.clientY };
  }

  function getBoundaries() {
    const container = containerRef?.value || null;
    const bounds = getContainerBounds(container);
    const element = elementRef.value;
    
    if (!element) {
      return { minX: 0, minY: 0, maxX: bounds.width, maxY: bounds.height };
    }

    const rect = element.getBoundingClientRect();
    
    // When using viewport, offset is 0; when using container, adjust for container position
    const offsetX = container ? bounds.left : 0;
    const offsetY = container ? bounds.top : 0;

    return {
      minX: 0,
      minY: 0,
      maxX: bounds.width - rect.width - offsetX,
      maxY: bounds.height - rect.height - offsetY,
    };
  }

  function applySnap(posX: number, posY: number) {
    if (!snapToEdges) return { x: posX, y: posY };

    const { minX, minY, maxX, maxY } = getBoundaries();
    let snappedX = posX;
    let snappedY = posY;

    // Snap to left edge
    if (Math.abs(posX - minX) < snapThreshold) {
      snappedX = minX;
    }
    // Snap to right edge
    if (Math.abs(posX - maxX) < snapThreshold) {
      snappedX = maxX;
    }
    // Snap to top edge
    if (Math.abs(posY - minY) < snapThreshold) {
      snappedY = minY;
    }
    // Snap to bottom edge
    if (Math.abs(posY - maxY) < snapThreshold) {
      snappedY = maxY;
    }

    return { x: snappedX, y: snappedY };
  }

  function constrainPosition(posX: number, posY: number) {
    if (!constrainToContainer) return { x: posX, y: posY };
    
    const { minX, minY, maxX, maxY } = getBoundaries();
    return {
      x: clamp(posX, minX, maxX),
      y: clamp(posY, minY, maxY),
    };
  }

  function handleDragStart(e: MouseEvent | TouchEvent) {
    if (!enabled) return;

    // Ignore if target is a button or interactive element
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      return;
    }

    e.preventDefault();

    const pos = getEventPosition(e);
    startX = pos.clientX;
    startY = pos.clientY;
    dragging.value = true;

    // Bring window to front
    if (elementId) {
      zIndex.value = bringToFront(elementId);
    }

    events.onDragStart?.(x.value, y.value);

    // Add move/end listeners
    document.addEventListener('mousemove', handleDragMove, { passive: false });
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragMove, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);
  }

  function handleDragMove(e: MouseEvent | TouchEvent) {
    if (!dragging.value) return;

    e.preventDefault();

    const pos = getEventPosition(e);
    const deltaX = pos.clientX - startX;
    const deltaY = pos.clientY - startY;

    startX = pos.clientX;
    startY = pos.clientY;

    let newX = x.value + deltaX;
    let newY = y.value + deltaY;

    // Apply constraints
    const constrained = constrainPosition(newX, newY);
    newX = constrained.x;
    newY = constrained.y;

    // Apply snap (only affects final position, not during drag)
    const snapped = applySnap(newX, newY);

    x.value = snapped.x;
    y.value = snapped.y;

    events.onDragMove?.(x.value, y.value);
  }

  function handleDragEnd() {
    if (!dragging.value) return;

    dragging.value = false;

    // Remove listeners
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDragMove);
    document.removeEventListener('touchend', handleDragEnd);
    document.removeEventListener('touchcancel', handleDragEnd);

    events.onDragEnd?.(x.value, y.value);
  }

  // Programmatically set position
  function setPosition(newX: number, newY: number, constrain = true) {
    if (constrain) {
      const constrained = constrainPosition(newX, newY);
      x.value = constrained.x;
      y.value = constrained.y;
    } else {
      x.value = newX;
      y.value = newY;
    }
    events.onPositionChange?.(x.value, y.value);
  }

  // Center in container or viewport
  function center() {
    const container = containerRef?.value || null;
    const bounds = getContainerBounds(container);
    const element = elementRef.value;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const newX = (bounds.width - rect.width) / 2;
    const newY = (bounds.height - rect.height) / 2;

    setPosition(newX, newY, false);
  }

  // Focus/bring to front
  function focus() {
    if (elementId) {
      zIndex.value = bringToFront(elementId);
    }
  }

  // Watch position changes
  watch([x, y], ([newX, newY]) => {
    events.onPositionChange?.(newX, newY);
  });

  function initialize() {
    const handle = handleRef.value;
    const element = elementRef.value;

    if (!handle || !element) return;

    elementId = element.id || `draggable-${Date.now()}`;
    if (!element.id) {
      element.id = elementId;
    }

    // Add event listeners to handle
    handle.addEventListener('mousedown', handleDragStart);
    handle.addEventListener('touchstart', handleDragStart, { passive: false });

    // Set cursor style
    handle.style.cursor = 'grab';
  }

  function cleanup() {
    const handle = handleRef.value;

    if (handle) {
      handle.removeEventListener('mousedown', handleDragStart);
      handle.removeEventListener('touchstart', handleDragStart);
    }

    // Remove global listeners just in case
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDragMove);
    document.removeEventListener('touchend', handleDragEnd);
    document.removeEventListener('touchcancel', handleDragEnd);

    if (elementId) {
      removeFromStack(elementId);
    }
  }

  // Watch for ref changes to reinitialize
  watch([elementRef, handleRef], () => {
    cleanup();
    nextTick(initialize);
  });

  onMounted(() => nextTick(initialize));
  onUnmounted(cleanup);

  return {
    x,
    y,
    dragging,
    zIndex,
    setPosition,
    center,
    focus,
  };
}
