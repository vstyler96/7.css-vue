<template>
  <transition>
    <WinWindow
      v-if="show"
      active
      :draggable="draggable"
      :title="title"
      :default-x="defaultX"
      :default-y="defaultY"
      :width="width"
      :color="color"
      style="position: fixed; z-index: 1000 !important;"
    >
      <slot>
        <p>
          {{ message }}
        </p>
      </slot>
      <section class="field-row" style="padding-top: 1em; justify-content: flex-end">
        <WinButton
          text="Cancel"
          @click="onCancel"
        />

        <WinButton
          text="Accept"
          class="default"
          @click="onAccept"
        />
      </section>

      <template #status-bar>
        <slot name="status">
          <p
            v-for="statusField in statusFields"
            :key="statusField"
            class="status-bar-field"
          >
            {{ statusField }}
          </p>
        </slot>
      </template>
    </WinWindow>
  </transition>
  <div
    v-if="show"
    class="w-full h-full bg-black/20 backdrop-blur-xs fixed top-0 left-0"
  />
</template>
<script setup>
import WinButton from './Button.vue';
import WinWindow from './Window.vue';
import { computed } from 'vue';

defineOptions({ name: 'WinDialog' });
const emit = defineEmits(['accept', 'cancel', 'update:model-value']);
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'Window' },
  message: { type: String, default: null },
  width: { type: String, default: '400px' },
  height: { type: String, default: 'auto' },
  color: { type: String, default: '#4580c4' },
  defaultX: { type: [Number, String], default: () => (window.innerWidth / 2 - 250) },
  defaultY: { type: [Number, String], default: () => (window.innerHeight / 2 - 100) },
  hasStatus: { type: Boolean, default: false },
  statusFields: { type: Array, default: () => [] },
  permanent: { type: Boolean, default: false },
  cancelable: { type: Boolean, default: true },
  draggable: { type: Boolean, default: false },
});

const show = computed({
  get() { return props.modelValue; },
  set(value) { emit('update:model-value', value); },
});

function onAccept() {
  show.value = false;
  emit('accept');
}

function onCancel() {
  show.value = false;
  emit('cancel');
}
</script>
<style lang="scss" scope>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.window {
  margin: 16px 4px;
}

.title-bar-text {
  user-select: none;
}
</style>
