<template>
  <div
    class="window"
    :class="{ active }"
    :style="{ width, height, '--window-background-color': color }"
  >
    <div class="title-bar">
      <div class="title-bar-text">
        {{ title }}
      </div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
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
defineProps({
  active: { type: Boolean, default: false },
  title: { type: String, default: 'Window' },
  width: { type: String, default: 'auto' },
  height: { type: String, default: 'auto' },
  color: { type: String, default: '#4580c4' },
  hasSpace: { type: Boolean, default: false },
  hasScrollbar: { type: Boolean, default: false },
  hasStatus: { type: Boolean, default: false },
  statusFields: { type: Array, default: () => [] },
});
</script>
