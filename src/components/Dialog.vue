<template>
  <transition>
    <div
      v-if="show"
      class="window active"
      style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
      :style="{ width, height, '--window-background-color': color }"
    >
      <div class="title-bar">
        <div class="title-bar-text">
          {{ title }}
        </div>
      </div>

      <div
        class="window-body has-space"
        :class="{ 'has-scrollbar': hasScrollbar }"
      >
        <slot>
          <p>
            {{ message }}
          </p>
        </slot>

        <section class="field-row" style="justify-content: flex-end">
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
      </div>

      <div
        v-if="(hasStatus && statusFields.length) || $slots.status"
        class="status-bar"
      >
        <slot name="status">
          <p
            v-for="statusField in statusFields"
            :key="statusField"
            class="status-bar-field"
          >
            {{ statusField }}
          </p>
        </slot>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { WinButton } from '@/index';
import { computed } from 'vue';

const emit = defineEmits(['accept', 'cancel', 'update:model-value']);
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'Window' },
  message: { type: String, default: null },
  width: { type: String, default: 'auto' },
  height: { type: String, default: 'auto' },
  color: { type: String, default: '#4580c4' },
  hasScrollbar: { type: Boolean, default: false },
  hasStatus: { type: Boolean, default: false },
  statusFields: { type: Array, default: () => [] },
});

const show = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:model-value', value);
  },
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
