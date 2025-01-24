<template>
  <details
    :id="id"
    ref="collapse"
    class="winui-collapse"
  >
    <slot name="title">
      <summary>
        {{ smartTitle }}
      </summary>
    </slot>
    <slot />
  </details>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { ref, onMounted, onBeforeUnmount } from '@vue/runtime-core';
import { uniqueId } from 'lodash';

const id = `winui-collapse-${uniqueId()}`;

const emit = defineEmits(["toggle"]);
const props = defineProps({
  title: { type: String },
});

const el = ref(null);
const smartTitle = computed(() => {
  if (props.title) return props.title;

  // @TODO: test if el.value works as expected.
  return el.value.open ? "Hide" : "Show";
});

function handleToggle() {
  // @TODO: test if el.value works as expected.
  emit("toggle", el.value.open);
}

onMounted(() => {
  el.value = document.getElementById(id);
  el.value.addEventListener("toggle", handleToggle);
});

onBeforeUnmount(() => {
  el.value.removeEventListener("toggle", handleToggle);
  el.value = null;
});
</script>

<style scoped lang="scss">
// @import"7.css/dist/gui/collapse.css";
</style>
