<template>
  <div
    ref="targetWindow"
    class="window glass"
    :class="{ active, draggable, dragging, maximized }"
    :style="{
      width, height,
      '--window-background-color': color,
      top: `${offsetY}px`,
      left: `${offsetX}px`,
    }"
  >
    <div
      ref="windowTitleBar"
      class="title-bar"
      @mousedown="onMouseDown"
    >
      <div class="title-bar-text">
        {{ title }}
      </div>
      <div class="title-bar-controls">
        <button
          v-if="minimizable"
          aria-label="Minimize"
          @click="emit('minimize')"
        />
        <button
          v-if="maximizable"
          :aria-label="maximized ? 'Restore' : 'Maximize'"
          @click="onMaximize"
        />
        <button
          v-if="closable"
          aria-label="Close"
          @click="$emit('close')"
        />
      </div>
    </div>

    <div
      class="window-body"
      :class="{ 'has-space': hasSpace, 'has-scrollbar': hasScrollbar }"
    >
      <slot />
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
</template>
<script setup>
import useDraggable from '../composables/draggable.js';
import { ref, useTemplateRef, watch } from 'vue';

const emit = defineEmits(['minimize', 'maximize', 'close']);

defineOptions({ name: 'WinWindow' });
const props = defineProps({
  active: { type: Boolean, default: false },
  title: { type: String, default: 'Window' },
  width: { type: String, default: 'auto' },
  height: { type: String, default: 'auto' },
  color: { type: String, default: '#4580c4' },
  hasSpace: { type: Boolean, default: false },
  hasScrollbar: { type: Boolean, default: false },
  hasStatus: { type: Boolean, default: false },
  statusFields: { type: Array, default: () => [] },
  minimizable: { type: Boolean, default: true },
  maximizable: { type: Boolean, default: true },
  closable: { type: Boolean, default: true },
  draggable: { type: Boolean, default: false },
  offsetX: { type: Number, default: 0 },
  offsetY: { type: Number, default: 0 },
});

const targetWindow = useTemplateRef('targetWindow');
const maximized = ref(false);

const previousX = ref(0);
const previousY = ref(0);

const {
  dragging,
  offsetX,
  offsetY,
  onMouseDown,
} = useDraggable(props, targetWindow);

function onMaximize() {
  try {
    if (maximized.value) {
      offsetX.value = previousX.value;
      offsetY.value = previousY.value;

      previousX.value = 0;
      previousY.value = 0;

      maximized.value = false;
      return;
    }

    previousX.value = offsetX.value;
    previousY.value = offsetY.value;

    offsetX.value = 0;
    offsetY.value = 0;

    maximized.value = true;
  } finally {
    emit('maximize');
  }
}

watch(offsetX, (updated, old) => {
  if (updated === old) return;

  if (maximized.value) {
    // maximized.value = false;
  }
});

watch(offsetY, (updated, old) => {
  if (updated === old) return;

  if (maximized.value) {
    // maximized.value = false;
  }
});
</script>
<style lang="scss" scope>
.window {
  margin: 16px 4px;

  &.maximized {
    height: 100vh !important;
    width: calc(100vw - 15px) !important;
    top: 0;
    left: 0;
  }

  &.draggable {
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 900;
    margin: 0;

    .title-bar {
      user-select: none;

      &.dragging:hover {
        cursor: crosshair !important;
      }
    }
  }
}
</style>
