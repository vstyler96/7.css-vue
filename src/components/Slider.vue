<template>
  <input
    v-model="model"
    v-bind="$attrs"
    type="range"
    class="winui-slider"
  >
  <!-- @input="$emit('input', $event.target.value)" -->
</template>
<script setup>
import { computed } from 'vue';

const emit = defineEmits(["update:model-value"]);
const props = defineProps({
  modelValue: { type: [String, Number], default: 0 },
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
