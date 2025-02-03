<template>
  <details
    :id="id"
    ref="collapse"
    class="winui-collapse"
  >
    <slot name="title">
      <summary class="collapse-title">
        <win-icon
          v-if="prependIcon"
          :icon="prependIcon"
          size="16"
        />
        <span>
          {{ smartTitle }}
        </span>
      </summary>
    </slot>

    <slot />
  </details>
</template>
<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { uniqueId } from 'lodash';

const id = `winui-collapse-${uniqueId()}`;

const emit = defineEmits(["toggle"]);
const props = defineProps({
  title: { type: String, default: null },
  prependIcon: { type: String, default: null },
});

const el = ref(null);
const smartTitle = computed(() => {
  if (props.title) return props.title;

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
.collapse-title {
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
}
</style>
