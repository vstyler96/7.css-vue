<template>
  <div class="winui-radio">
    <input
      v-model="model"
      :id="id"
      :name="name"
      :disabled="disabled"
      type="radio"
    />
    <slot>
      <label :for="id">
        {{ label }}
      </label>
    </slot>
  </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';

const emit = defineEmits(["update:model-value"]);
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  modelValue: { type: [Number, String, Boolean] },
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

// export default {
//   name: "WinRadio",
//   props: {

//   },
//   computed: {
//     computedValue: {
//       get() {
//         return this.input;
//       },
//       set(value) {
//         this.input = value;
//         this.$emit("input", value);
//       },
//     },
//   },
//   data() {
//     return {
//       input: this.value,
//     };
//   },
//   watch: {
//     value(value) {
//       this.input = value;
//     },
//   },
// };
</script>
