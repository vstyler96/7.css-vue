<template>
  <details
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
import { ref, onBeforeMount, onBeforeUnmount } from '@vue/runtime-core';

const emit = defineEmits(["toggle"]);
const props = defineProps({
  title: { type: String },
});

const collapse = ref(null);
const smartTitle = computed(() => {
  if (props.title) return props.title;

  // @TODO: test if collapse.value works as expected.
  return collapse.value.open ? "Hide" : "Show";
});

function handleToggle() {
  // @TODO: test if collapse.value works as expected.
  emit("toggle", collapse.value.open);
}

onBeforeMount(() => {
  collapse.value.addEventListener("toggle", handleToggle);
});

onBeforeUnmount(() => {
  collapse.value.removeEventListener("toggle", handleToggle);
});
</script>

<style scoped src="7.css/dist/gui/collapse.css"></style>
