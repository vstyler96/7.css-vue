<template>
  <div
    class="window glass"
    :class="{ active }"
    :style="{ width, height, '--window-background-color': color }"
  >
    <div class="title-bar">
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
          aria-label="Maximize"
          @click="emit('maximize')"
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
const emit = defineEmits(['minimize', 'maximize', 'close']);

defineOptions({ name: 'WinWindow' });
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
  minimizable: { type: Boolean, default: true },
  maximizable: { type: Boolean, default: true },
  closable: { type: Boolean, default: true },
});
</script>
<style lang="scss" scope>
.window {
  margin: 16px 4px;
}

.title-bar-text {
  user-select: none;
}
</style>
