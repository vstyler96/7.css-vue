import { defineComponent, computed, ref, useSlots } from 'vue';
import useDraggable from '../../composables/draggable';
import { uniqueId, getWindowDimensions } from '../../utils/helpers';
import './index.css';

type WindowProps = {
  active?: boolean;
  title?: string;
  width?: string;
  height?: string;
  color?: string;
  hasScrollbar?: boolean;
  hasStatus?: boolean;
  statusFields?: Array<string>;
  minimizable?: boolean;
  maximizable?: boolean;
  closable?: boolean;
  draggable?: boolean;
  defaultX?: number | string;
  defaultY?: number | string;
};

// Constants
const TITLE_BAR_HEIGHT = 35;
const Z_INDEX_WINDOW = 900;

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
  },
  emits: ['minimize', 'maximize', 'close'],
  setup(props: WindowProps, { slots, emit }) {
    const id = `window-${uniqueId()}`;
    const maximized = ref(false);
    const minimized = ref(false);
    const originalPosition = ref({ x: Number(props.defaultX), y: Number(props.defaultY) });

    const {
      dragging,
      offsetX,
      offsetY,
    } = useDraggable(id, props, maximized, minimized);

    const slotInstances = useSlots();

    const showStatusBar = computed(() =>
      (props.hasStatus && props.statusFields && props.statusFields.length > 0) || !!slotInstances.status
    );

    const windowStyle = computed(() => ({
      '--window-background-color': props.color,
      '--title-bar-height': `${TITLE_BAR_HEIGHT}px`,
      '--z-index-window': Z_INDEX_WINDOW,
      top: `${offsetY.value}px`,
      left: `${offsetX.value}px`,
    }));

    function toggleMaximize() {
      if (maximized.value) {
        // Restore window
        offsetX.value = originalPosition.value.x;
        offsetY.value = originalPosition.value.y;
        maximized.value = false;
      } else {
        // Maximize window
        originalPosition.value = { x: offsetX.value, y: offsetY.value };
        offsetX.value = 0;
        offsetY.value = 0;
        maximized.value = true;
      }
      emit('maximize', maximized.value);
    }

    function toggleMinimize() {
      if (minimized.value) {
        // Restore window
        offsetY.value = originalPosition.value.y;
        minimized.value = false;
      } else {
        // Minimize window
        originalPosition.value.y = offsetY.value;

        const { height } = getWindowDimensions();
        offsetY.value = height - TITLE_BAR_HEIGHT;
        minimized.value = true;
      }
      emit('minimize', minimized.value);
    }

    return () => (
      <div
        id={id}
        class={[
          'window',
          'glass',
          {
            'active': props.active,
            'draggable': props.draggable,
            'dragging': dragging.value,
            'maximized': maximized.value,
            'minimized': minimized.value
          }
        ]}
        style={windowStyle.value}
      >
        <div
          id={`${id}-header`}
          class="title-bar"
        >
          <div class="title-bar-text">
            {props.title}
          </div>
          <div class="title-bar-controls">
            {props.minimizable && (
              <button
                aria-label={minimized.value ? 'Restore' : 'Minimize'}
                onClick={toggleMinimize}
              />
            )}
            {props.maximizable && (
              <button
                aria-label={maximized.value ? 'Restore' : 'Maximize'}
                onClick={toggleMaximize}
              />
            )}
            {props.closable && (
              <button
                aria-label="Close"
                onClick={() => emit('close')}
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
