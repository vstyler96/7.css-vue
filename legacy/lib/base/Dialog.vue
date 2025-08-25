<template>
  <Teleport to="body">
    <div v-if="show" class="dialog-overlay">
      <!-- Backdrop -->
      <div
        class="dialog-backdrop"
        @click="onBackdropClick"
      />

      <!-- Dialog window -->
      <transition
        name="dialog"
        appear
      >
        <WinWindow
          v-if="show"
          active
          :draggable="draggable"
          :title="title"
          :default-x="centerX"
          :default-y="centerY"
          :width="width"
          :color="color"
          :has-status="hasStatus"
          :status-fields="statusFields"
          class="dialog-window"
          @close="onClose"
        >
          <slot>
            <p v-if="message">
              {{ message }}
            </p>
          </slot>

          <section v-if="showActions" class="dialog-actions">
            <WinButton
              v-if="cancelable"
              text="Cancel"
              @click="onCancel"
            />
            <WinButton
              text="OK"
              class="default"
              @click="onAccept"
            />
          </section>

          <template v-if="hasStatus" #status>
            <slot name="status" />
          </template>
        </WinWindow>
      </transition>
    </div>
  </Teleport>
</template>

<script setup>
import WinButton from './Button.vue';
import WinWindow from './Window.vue';
import { computed } from 'vue';
import { getWindowDimensions } from '../utils/helpers.js';

// Constants
const DEFAULT_DIALOG_WIDTH = 400;
const DEFAULT_DIALOG_HEIGHT = 200;
const Z_INDEX_DIALOG = 1000;

defineOptions({ name: 'WinDialog' });

const emit = defineEmits(['accept', 'cancel', 'close', 'update:model-value']);

const props = defineProps({
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
});

const show = computed({
  get() { return props.modelValue; },
  set(value) { emit('update:model-value', value); },
});

const centerX = computed(() => {
  const { width } = getWindowDimensions();
  return Math.max(0, (width - DEFAULT_DIALOG_WIDTH) / 2);
});

const centerY = computed(() => {
  const { height } = getWindowDimensions();
  return Math.max(0, (height - DEFAULT_DIALOG_HEIGHT) / 2);
});

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
</script>

<style lang="scss" scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: v-bind('Z_INDEX_DIALOG');
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
}

.dialog-window {
  position: relative;
  z-index: 1;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 1em;
}

/* Dialog transitions */
.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.3s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
