import { onMounted, onUnmounted, ref, nextTick, type Ref } from 'vue';
import { getWindowDimensions, clamp } from '../utils/helpers';

export default function useDraggable(
  targetId: string,
  props: { draggable?: boolean; defaultX?: number | string; defaultY?: number | string },
  maximized?: Ref<boolean>,
  minimized?: Ref<boolean>
) {
  const offsetX = ref(Number(props.defaultX) || 0);
  const offsetY = ref(Number(props.defaultY) || 0);
  const dragging = ref(false);

  let startX = 0;
  let startY = 0;
  let element: HTMLElement | null = null;
  let header: HTMLElement | null = null;

  // Cleanup functions
  const cleanupListeners: (() => void)[] = [];

  function addEventListeners() {
    const onMouseMove = (e: MouseEvent) => handleDragMove(e);
    const onMouseUp = () => handleDragStop();

    document.addEventListener('mousemove', onMouseMove, { passive: false });
    document.addEventListener('mouseup', onMouseUp);

    cleanupListeners.push(() => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    });
  }

  function removeEventListeners() {
    cleanupListeners.forEach(cleanup => cleanup());
    cleanupListeners.length = 0;
  }

  function getBoundaries() {
    const { width, height } = getWindowDimensions();

    const elementRect = element?.getBoundingClientRect();
    const elementWidth = elementRect?.width || 300;
    const elementHeight = elementRect?.height || 200;

    return {
      minX: 0,
      minY: 0,
      maxX: width - elementWidth,
      maxY: height - elementHeight,
    };
  }

  function constrainPosition(x: number, y: number) {
    const { minX, minY, maxX, maxY } = getBoundaries();
    return {
      x: clamp(x, minX, maxX),
      y: clamp(y, minY, maxY),
    };
  }

  function handleDragStop() {
    if (!dragging.value) return;

    removeEventListeners();
    dragging.value = false;

    if (header) {
      header.style.cursor = 'grab';
    }
  }

  function handleDragMove(e: MouseEvent) {
    if (!dragging.value || maximized?.value || minimized?.value) {
      return;
    }

    e.preventDefault();

    const deltaX = startX - e.clientX;
    const deltaY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    const newX = offsetX.value - deltaX;
    const newY = offsetY.value - deltaY;

    const constrained = constrainPosition(newX, newY);
    offsetX.value = constrained.x;
    offsetY.value = constrained.y;
  }

  function handleDragStart(e: MouseEvent) {
    if (maximized?.value || minimized?.value) {
      return;
    }

    e.preventDefault();

    startX = e.clientX;
    startY = e.clientY;
    dragging.value = true;

    if (header) {
      header.style.cursor = 'grabbing';
    }

    addEventListeners();
  }

  async function initialize() {
    if (!props.draggable) return;

    await nextTick();

    try {
      element = document.getElementById(targetId);
      header = document.getElementById(`${targetId}-header`);

      if (!element) {
        console.warn(`[Draggable] Element with id "${targetId}" not found`);
        return;
      }

      if (!header) {
        console.warn(`[Draggable] Header element with id "${targetId}-header" not found`);
        return;
      }

      header.addEventListener('mousedown', handleDragStart);

      // Store cleanup for header listener
      cleanupListeners.push(() => {
        if (header) {
          header.removeEventListener('mousedown', handleDragStart);
        }
      });

    } catch (error) {
      console.error('[Draggable] Initialization failed:', error);
    }
  }

  function cleanup() {
    removeEventListeners();
    if (header) {
      header.removeEventListener('mousedown', handleDragStart);
    }
  }

  onMounted(initialize);
  onUnmounted(cleanup);

  return {
    dragging,
    offsetX,
    offsetY,
    cleanup,
  };
}
