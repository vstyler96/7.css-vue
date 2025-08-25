<template>
  <input
    v-if="instant"
    :id="id"
    v-model="searchValue"
    v-bind="$attrs"
    type="search"
    class="winui-searchbox"
    :placeholder="placeholder"
    @keyup.enter="onSearch"
  >
  <div
    v-else
    class="searchbox win-searchbox"
  >
    <input
      v-model="searchValue"
      type="search"
      :placeholder="placeholder"
    >
    <button
      aria-label="search"
      @click="onSearch"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { uniqueId } from '../utils/helpers.js';

const id = `searchbox-${uniqueId()}`;

defineOptions({ name: 'WinSearchbox' });
const emit = defineEmits(['update:search', 'search']);
defineProps({
  instant: { type: Boolean, default: false },
  placeholder: { type: String, default: "Search" },
});

const searchValue = ref();

function onSearch() {
  emit("search", searchValue.value);
}
</script>
<style lang="scss" scoped>
[type="search"] {
  min-width: auto;
}

[aria-label="search"] {
  border: 1px solid #8e8f8f;
}
</style>
