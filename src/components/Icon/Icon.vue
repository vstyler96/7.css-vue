<template>
  <span
    :style="wrapperStyle"
    class="winui-icon"
  >
    <img
      :src="src"
      :alt="alt"
      :width="size"
      :height="size"
    />
  </span>
</template>
<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String },
  size: { type: [String, Number] },
});

const wrapperStyle = computed(() => {
  if (!props.size) return undefined;
  const hasUnit = /^\d+[a-zA-Z]+$/.test(props.size);
  return { "--size": hasUnit ? props.size : `${props.size}px` };
});
</script>
<style lang="scss" scoped>
.winui-icon {
  display: inline-block;
  width: var(--size);
  height: var(--size);

  img {
    display: block;
  }
}
</style>
