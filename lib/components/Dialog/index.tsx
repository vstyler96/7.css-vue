import { defineComponent, computed, Teleport, Transition } from 'vue';
import WinWindow from '../Window/index.tsx';
import { getWindowDimensions } from '../../utils/helpers';
import './index.css';

type DialogProps = {
  modelValue?: boolean;
  title?: string;
  message?: string;
  width?: string;
  height?: string;
  color?: string;
  hasStatus?: boolean;
  statusFields?: Array<string>;
  permanent?: boolean;
  cancelable?: boolean;
  draggable?: boolean;
  closeOnBackdrop?: boolean;
  showActions?: boolean;
};

// Constants
const DEFAULT_DIALOG_WIDTH = 400;
const DEFAULT_DIALOG_HEIGHT = 200;
const Z_INDEX_DIALOG = 1000;

export default defineComponent({
  name: 'WinDialog',
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: 'Dialog' },
    message: { type: String, default: '' },
    width: { type: String, default: '400px' },
    height: { type: String, default: 'auto' },
    color: { type: String, default: '#4580c4' },
    hasStatus: { type: Boolean, default: false },
    statusFields: { type: Array, default: () => [] },
    permanent: { type: Boolean, default: false },
    cancelable: { type: Boolean, default: true },
    draggable: { type: Boolean, default: false },
    closeOnBackdrop: { type: Boolean, default: true },
    showActions: { type: Boolean, default: true },
  },
  emits: ['accept', 'cancel', 'close', 'update:model-value'],
  setup(props: DialogProps, { slots, emit }) {
    const show = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:model-value', value);
      },
    });

    const centerX = computed(() => {
      const { width } = getWindowDimensions();
      return Math.max(0, (width - DEFAULT_DIALOG_WIDTH) / 2);
    });

    const centerY = computed(() => {
      const { height } = getWindowDimensions();
      return Math.max(0, (height - DEFAULT_DIALOG_HEIGHT) / 2);
    });

    const overlayStyle = computed(() => ({
      '--z-index-dialog': Z_INDEX_DIALOG,
    }));

    function onAccept() {
      show.value = false;
      emit('accept');
    }

    function onCancel() {
      show.value = false;
      emit('cancel');
    }

    function onClose() {
      if (!props.permanent) {
        show.value = false;
        emit('close');
      }
    }

    function onBackdropClick() {
      if (props.closeOnBackdrop && !props.permanent) {
        onClose();
      }
    }

    return () => (
      <Teleport to="body">
        {show.value && (
          <div
            class="dialog-overlay"
            style={overlayStyle.value}
          >
            <div
              class="dialog-backdrop"
              onClick={onBackdropClick}
            />

            <Transition
              name="dialog"
              appear
            >
              {show.value && (
                <WinWindow
                  active
                  draggable={props.draggable}
                  title={props.title}
                  defaultX={centerX.value}
                  defaultY={centerY.value}
                  width={props.width}
                  color={props.color}
                  hasStatus={props.hasStatus}
                  statusFields={props.statusFields}
                  class="dialog-window"
                  onClose={onClose}
                  v-slots={{
                    status: props.hasStatus && slots.status ? slots.status : undefined
                  }}
                >
                  {slots.default ? slots.default() : (
                    props.message && (
                      <p>{props.message}</p>
                    )
                  )}

                  {props.showActions && (
                    <section class="dialog-actions">
                      {props.cancelable && (
                        <button
                          class="winui-button"
                          onClick={onCancel}
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        class="winui-button default"
                        onClick={onAccept}
                      >
                        OK
                      </button>
                    </section>
                  )}
                </WinWindow>
              )}
            </Transition>
          </div>
        )}
      </Teleport>
    );
  },
});
