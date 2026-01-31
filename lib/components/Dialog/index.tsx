import { defineComponent, computed, Teleport, Transition, watch, onUnmounted, ref } from 'vue';
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
  persistent?: boolean;
  cancelable?: boolean;
  closable?: boolean;
  draggable?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
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
    persistent: { type: Boolean, default: false },
    cancelable: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    draggable: { type: Boolean, default: false },
    closeOnBackdrop: { type: Boolean, default: true },
    closeOnEscape: { type: Boolean, default: true },
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

    // Track if dialog should be rendered (stays true during leave animation)
    const isRendered = ref(props.modelValue);

    // When show becomes true, render immediately
    // When show becomes false, isRendered stays true until animation completes
    watch(show, (isOpen) => {
      if (isOpen) {
        isRendered.value = true;
      }
    });

    function onAfterLeave() {
      isRendered.value = false;
    }

    // ESC key handler
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && props.closeOnEscape && !props.permanent && !props.persistent) {
        show.value = false;
        emit('close');
      }
    }

    // Add/remove keyboard listener when dialog opens/closes
    watch(show, (isOpen) => {
      if (isOpen) {
        document.addEventListener('keydown', handleKeydown);
      } else {
        document.removeEventListener('keydown', handleKeydown);
      }
    }, { immediate: true });

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown);
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
      // For persistent dialogs, only emit the event - let user handle closing
      if (!props.persistent) {
        show.value = false;
      }
      emit('accept');
    }

    function onCancel() {
      // For persistent dialogs, only emit the event - let user handle closing
      if (!props.persistent) {
        show.value = false;
      }
      emit('cancel');
    }

    function onClose() {
      if (!props.permanent) {
        // For persistent dialogs, only emit the event - let user handle closing
        if (!props.persistent) {
          show.value = false;
        }
        emit('close');
      }
    }

    function onBackdropClick() {
      if (props.closeOnBackdrop && !props.permanent && !props.persistent) {
        onClose();
      }
    }

    return () => (
      <Teleport to="body">
        {isRendered.value && (
          <div
            class={['dialog-overlay', { 'dialog-closing': !show.value }]}
            style={overlayStyle.value}
          >
            <Transition
              name="dialog-backdrop"
              appear
            >
              {show.value && (
                <div
                  class="dialog-backdrop"
                  onClick={onBackdropClick}
                />
              )}
            </Transition>

            <Transition
              name="dialog"
              appear
              onAfterLeave={onAfterLeave}
            >
              {show.value && (
                <WinWindow
                  active
                  draggable={props.draggable}
                  closable={props.closable}
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
