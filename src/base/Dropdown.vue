<template>
  <select
    v-model="model"
    class="winui-dropdown"
  >
    <slot name="placeholder">
      <option
        v-if="placeholder"
        :value="undefined"
        disabled
        selected
      >
        {{ placeholder }}
      </option>
    </slot>
    <slot name="options">
      <option
        v-for="option in options"
        :key="option[itemValue]"
        :value="option[itemValue]"
        :disabled="option.disabled"
        :selected="model === option[itemValue]"
      >
        {{ option[itemTitle] }}
      </option>
    </slot>
  </select>
</template>
<script setup>
import { computed } from "vue";

defineOptions({ name: 'WinDropdown' });
const emit = defineEmits(["update:model-value"]);
const props = defineProps({
  modelValue: { type: [Number, String], default: null },
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: null },
  itemValue: { type: String, default: "id" },
  itemTitle: { type: String, default: "name" },
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:model-value", value);
  },
});
</script>
