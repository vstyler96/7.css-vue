<template>
  <ul
    role="listbox"
    class="winui-listbox"
  >
    <li
      v-for="option in options"
      :key="option[itemValue]"
      v-bind="bindAttr(option)"
      role="option"
      @click="onClick(option[itemValue])"
    >
      {{ option[itemText] }}
    </li>
  </ul>
</template>
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'WinListbox' });
const emit = defineEmits(['update:model-value']);
const props = defineProps({
  modelValue: { type: [Number, String], required: true },
  options: { type: Array, required: true },
  itemValue: { type: String, default: 'id' },
  itemText: { type: String, default: 'name' },
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:model-value", value);
  },
});

function bindAttr(option) {
  if (option[props.itemValue] === model.value) {
    return { 'aria-selected': true };
  }

  return {};
}

function onClick(option) {
  model.value = option;
}
</script>
<style lang="scss" scoped>
.winui-listbox {
  user-select: none;
}
</style>
