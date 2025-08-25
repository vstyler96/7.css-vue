<template>
  <button
    v-bind="$attrs"
    class="winui-button"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
<script setup>
defineOptions({ name: 'WinButton' });
defineProps({
  text: { type: String, default: 'Button' },
});
</script>
<style lang="scss" scoped>
.winui-button:not([role="tab"]) {
  margin: 4px 8px;
}
</style>
