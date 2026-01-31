import { defineComponent, computed, useSlots, ref } from 'vue';
import useDraggable from '../../composables/draggable';
import { uniqueId } from '../../utils/helpers';
import './index.css';

// Constants
const TITLE_BAR_HEIGHT = 35;
const BASE_Z_INDEX = 900;

export default defineComponent({
  name: 'WinWindow',
  props: {
    active: { type: Boolean, default: false },
    title: { type: String, default: 'Window' },
    width: { type: String, default: 'auto' },
    height: { type: String, default: 'auto' },
    color: { type: String, default: '#4580c4' },
    hasScrollbar: { type: Boolean, default: false },
    hasStatus: { type: Boolean, default: false },
    statusFields: { type: Array, default: () => [] },
    minimizable: { type: Boolean, default: false },
    maximizable: { type: Boolean, default: false },
    closable: { type: Boolean, default: false },
    draggable: { type: Boolean, default: false },
    defaultX: { type: [Number, String], default: 0 },
    defaultY: { type: [Number, String], default: 0 },
    snapToEdges: { type: Boolean, default: false },
    snapThreshold: { type: Number, default: 20 },
    constrainToViewport: { type: Boolean, default: true },
  },
  emits: ['minimize', 'maximize', 'close', 'dragStart', 'dragEnd', 'positionChange', 'focus'],
  setup(props, { slots, emit, expose }) {
    const id = `window-${uniqueId()}`;
    const windowRef = ref<HTMLElement | null>(null);
    const headerRef = ref<HTMLElement | null>(null);

    const slotInstances = useSlots();

    const {
      x,
      y,
      dragging,
      zIndex,
      setPosition,
      center,
      focus,
    } = useDraggable(
      windowRef,
      headerRef,
      {
        enabled: props.draggable,
        defaultX: props.defaultX,
        defaultY: props.defaultY,
        snapToEdges: props.snapToEdges,
        snapThreshold: props.snapThreshold,
        constrainToContainer: props.constrainToViewport,
      },
      {
        onDragStart: (posX, posY) => emit('dragStart', { x: posX, y: posY }),
        onDragEnd: (posX, posY) => emit('dragEnd', { x: posX, y: posY }),
        onPositionChange: (posX, posY) => emit('positionChange', { x: posX, y: posY }),
      }
    );

    const showStatusBar = computed(() =>
      (props.hasStatus && props.statusFields && props.statusFields.length > 0) || !!slotInstances.status
    );

    const windowStyle = computed(() => ({
      '--window-background-color': props.color,
      '--title-bar-height': `${TITLE_BAR_HEIGHT}px`,
      top: props.draggable ? `${y.value}px` : undefined,
      left: props.draggable ? `${x.value}px` : undefined,
      zIndex: props.draggable ? zIndex.value : BASE_Z_INDEX,
    }));

    function handleWindowClick() {
      if (props.draggable) {
        focus();
        emit('focus');
      }
    }

    // Expose methods for external control
    expose({
      setPosition,
      center,
      focus,
      getPosition: () => ({ x: x.value, y: y.value }),
    });

    return () => (
      <div
        id={id}
        ref={windowRef}
        class={[
          'window',
          'glass',
          {
            'active': props.active,
            'draggable': props.draggable,
            'dragging': dragging.value,
          }
        ]}
        style={windowStyle.value}
        onClick={handleWindowClick}
      >
        <div
          ref={headerRef}
          class="title-bar"
        >
          <div class="title-bar-text">
            {props.title}
          </div>
          <div class="title-bar-controls">
            {props.minimizable && (
              <button
                aria-label="Minimize"
                onClick={(e) => { e.stopPropagation(); emit('minimize'); }}
              />
            )}
            {props.maximizable && (
              <button
                aria-label="Maximize"
                onClick={(e) => { e.stopPropagation(); emit('maximize'); }}
              />
            )}
            {props.closable && (
              <button
                aria-label="Close"
                onClick={(e) => { e.stopPropagation(); emit('close'); }}
              />
            )}
          </div>
        </div>

        <div
          class={[
            'window-body',
            'has-space',
            { 'has-scrollbar': props.hasScrollbar }
          ]}
          style={{ width: props.width }}
        >
          {slots.default && slots.default()}
        </div>

        {showStatusBar.value && (
          <div class="status-bar">
            {slots.status ? slots.status() : (
              props.statusFields?.map((field, index) => (
                <p key={index} class="status-bar-field">
                  {field}
                </p>
              ))
            )}
          </div>
        )}
      </div>
    );
  },
});
