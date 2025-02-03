<template>
  <div class="winui-radio">
    <input
      :id="id"
      v-model="model"
      :value="value"
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
  name: { type: String, required: true },
  modelValue: { type: [Number, String, Boolean], default: null },
  value: { type: [Number, String, Boolean], required: true },
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

const id = computed(() => `${props.name}-${props.value}-radio`);
</script>
