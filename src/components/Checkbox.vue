<template>
  <div class="winui-checkbox">
    <input
      :id="id"
      v-model="model"
      :name="name"
      :disabled="disabled"
      type="checkbox"
    >
    <label :for="id">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
  </div>
</template>
<script setup>
import { uniqueId } from 'lodash';
import { computed } from 'vue';

const emit = defineEmits(['update:model-value']);
const props = defineProps({
  id: { type: String, default: () => `input-${uniqueId()}` },
  name: { type: String, required: true },
  label: { type: String, default: null },
  modelValue: { type: [Number, String, Boolean], default: null },
  disabled: { type: Boolean, default: false },
});

const model = computed({
  get() { return props.modelValue; },
  set(value) { emit('update:model-value', value); },
});
</script>
