<template>
  <div
    :id="id"
    class="window glass"
    :class="{ active, draggable, dragging, maximized, minimized }"
    :style="{
      '--window-background-color': color,
      top: `${offsetY}px`,
      left: `${offsetX}px`,
    }"
  >
    <div
      :id="`${id}-header`"
      class="title-bar"
    >
      <div class="title-bar-text">
        {{ title }}
      </div>
      <div class="title-bar-controls">
        <button
          v-if="minimizable"
          :aria-label="minimized ? 'Restore' : 'Minimize'"
          @click="onMinimize"
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
      class="window-body has-space"
      :class="{ 'has-scrollbar': hasScrollbar }"
      :style="{ width }"
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
import { reactive, ref } from 'vue';
import { uniqueId } from '../helpers.js';

const id = `window-${uniqueId()}`;
const emit = defineEmits(['minimize', 'maximize', 'close']);

defineOptions({ name: 'WinWindow' });
const props = defineProps({
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
});

const maximized = ref(false);
const minimized = ref(false);

const backupOffset = reactive({
  x: props.defaultX,
  y: props.defaultY,
});

const {
  dragging,
  offsetX,
  offsetY,
} = useDraggable(id, props, maximized, minimized);

function onMaximize() {
  try {
    if (maximized.value) {
      offsetX.value = backupOffset.x;
      offsetY.value = backupOffset.y;

      backupOffset.x = props.defaultX;
      backupOffset.y = props.defaultY;

      maximized.value = false;
      return;
    }

    backupOffset.x = offsetX.value;
    backupOffset.y = offsetY.value;

    offsetX.value = 0;
    offsetY.value = 0;

    maximized.value = true;
  } finally {
    emit('maximize');
  }
}

function onMinimize() {
  try {
    if (minimized.value) {
      offsetY.value = backupOffset.y;

      backupOffset.y = props.defaultY;

      minimized.value = false;
      return;
    }

    backupOffset.y = offsetY.value;
    offsetY.value = window.innerHeight - 35;

    minimized.value = true;
  } finally {
    emit('minimize');
  }
}
</script>
<style lang="scss" scope>
.window {
  margin: 16px 4px;

  .title-bar {
    align-items: flex-start !important;
  }

  &.maximized {
    .window-body {
      height: calc(100vh - 35px) !important;
      width: calc(100vw - 35px) !important;
    }
  }

  &.minimized {
    .window-body {
      height: 1px;
      overflow: hidden;
    }
  }

  &.draggable {
    position: fixed !important;
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
