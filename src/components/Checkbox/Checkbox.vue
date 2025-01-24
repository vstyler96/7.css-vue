<template>
  <div class="winui-checkbox">
    <input
      v-model="model"
      :id="id"
      :name="name"
      :disabled="disabled"
      type="checkbox"
    />
    <label :for="id">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
  </div>
</template>
<script setup>
import { uniqueId } from 'lodash';
import { computed } from '@vue/reactivity';

const emit = defineEmits(['update:model-value']);
const props = defineProps({
  id: { type: String, default: () => `input-${uniqueId()}` },
  name: {  type: String },
  label: {  type: String },
  modelValue: { type: [Number, String, Boolean] },
  disabled: { type: Boolean, default: false },
});

const model = computed({
  get() { return props.modelValue; },
  set(value) { emit('update:model-value', value); },
});
</script>
<style scoped src="7.css/dist/gui/checkbox.css"></style>
