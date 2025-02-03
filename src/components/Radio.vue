<template>
  <div class="winui-radio">
    <input
      :id="id"
      v-model="model"
      :name="name"
      :disabled="disabled"
      type="radio"
    >
    <slot>
      <label :for="id">
        {{ label }}
      </label>
    </slot>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const emit = defineEmits(["update:model-value"]);
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  modelValue: { type: [Number, String, Boolean], default: null },
  disabled: { type: Boolean, default: false },
  label: { type: String, required: true },
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
