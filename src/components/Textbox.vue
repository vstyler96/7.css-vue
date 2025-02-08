<template>
  <textarea
    v-if="type === 'textarea'"
    v-model="model"
    v-bind="$attrs"
    :readonly="readonly"
    class="winui-textbox"
  />
  <input
    v-else
    v-model="model"
    v-bind="$attrs"
    :readonly="readonly"
    :type="type"
    class="winui-textbox"
  >
</template>
<script setup>
import { computed } from "vue";

const emit = defineEmits(["update:model-value"]);
const props = defineProps({
  modelValue: { type: String, required: true },
  type: { type: String, default: "text" },
  readonly: { type: Boolean, default: false },
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
<style>
.winui-textbox:read-only {
  background-color: #f1f1f1;
  cursor: not-allowed;
  color: #444;
}
</style>
