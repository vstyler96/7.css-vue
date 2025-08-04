<template>
  <div
    :id="id"
    class="window glass"
    :class="{
      active,
      draggable,
      dragging,
      maximized,
      minimized
    }"
    :style="windowStyle"
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
          @click="toggleMinimize"
        />
        <button
          v-if="maximizable"
          :aria-label="maximized ? 'Restore' : 'Maximize'"
          @click="toggleMaximize"
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
      v-if="showStatusBar"
      class="status-bar"
    >
      <slot name="status">
        <p
          v-for="field in statusFields"
          :key="field"
          class="status-bar-field"
        >
          {{ field }}
        </p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import useDraggable from '../composables/draggable.js';
import { computed, ref, useSlots } from 'vue';
import { uniqueId, getWindowDimensions } from '../helpers.js';

// Constants
const TITLE_BAR_HEIGHT = 35;
const Z_INDEX_WINDOW = 900;

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
const originalPosition = ref({ x: props.defaultX, y: props.defaultY });

const {
  dragging,
  offsetX,
  offsetY,
} = useDraggable(id, props, maximized, minimized);

const slots = useSlots();

const showStatusBar = computed(() =>
  (props.hasStatus && props.statusFields.length > 0) || !!slots.status
);

const windowStyle = computed(() => ({
  '--window-background-color': props.color,
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
</script>

<style lang="scss" scoped>
.window {
  margin: 16px 4px;

  .title-bar {
    align-items: flex-start;
  }

  &.maximized {
    .window-body {
      height: calc(100vh - v-bind('TITLE_BAR_HEIGHT + "px"'));
      width: calc(100vw - v-bind('TITLE_BAR_HEIGHT + "px"'));
    }
  }

  &.minimized {
    .window-body {
      height: 1px;
      overflow: hidden;
    }
  }

  &.draggable {
    position: fixed;
    z-index: v-bind('Z_INDEX_WINDOW');
    margin: 0;

    .title-bar {
      user-select: none;
      cursor: grab;

      &.dragging {
        cursor: grabbing;
      }
    }
  }
}
</style>
