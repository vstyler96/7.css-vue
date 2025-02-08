<template>
  <div
    class="winui-checkbox"
    @click.prevent="onToggleValue"
  >
    <input
      :id="id"
      :name="name"
      :disabled="disabled"
      type="checkbox"
      :checked="checked"
    >
    <label :for="id">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:model-value']);
const props = defineProps({
  disabled: { type: Boolean, default: false },
  falseValue: { type: [Array, Boolean, Number, String, Object], default: undefined },
  modelValue: { type: [Array, Boolean, Number, String, Object], default: false },
  name: { type: String, required: true },
  label: { type: String, default: null },
  trueValue: { type: [Array, Boolean, Number, String, Object], default: undefined },
  value: { type: [Array, Boolean, Number, String, Object], default: true },
});

const id = computed(() => `${props.name}-checkbox`);

const checkValue = computed(() => props.trueValue === undefined ? props.value : props.trueValue);
const uncheckValue = computed(() => props.falseValue === undefined ? false : props.falseValue);

const checked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue?.includes(checkValue.value);
  }

  return checkValue.value === props.modelValue;
});

function onToggleValue() {
  if (props.disabled) return;

  const isArrayMethod = Array.isArray(props.modelValue);

  if (!isArrayMethod) {
    emit('update:model-value', checked.value ? uncheckValue.value : checkValue.value);
    return;
  }

  if (checked.value) {
    emit('update:model-value', props.modelValue.filter(v => v !== checkValue.value));
    return;
  }

  emit('update:model-value', [
    ...props.modelValue,
    checkValue.value,
  ]);
}
</script>
<style lang="scss" scoped>
.winui-checkbox {
  margin: 6px 0;
  user-select: none;
  label, &::before, &::after {
    cursor: pointer !important;
  }
}
</style>
