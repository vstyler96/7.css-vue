<template>
  <ul role="listbox" class="winui-listbox">
    <li
      v-for="option in options"
      role="option"
      :key="option[itemValue]"
      :aria-selected="model === option[itemValue]"
      @click="handleClick(option[itemValue])"
    >
      {{ item[itemText] }}
    </li>
  </ul>
</template>
<script setup>
import { computed } from '@vue/reactivity';

const emit = defineEmits(['update:model-value']);
const props = defineProps({
  modelValue: [Number, String],
  items: { type: Array, required: true },
});

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:model-value", value);
  },
});
export default {
  name: "WinListbox",
  props: {

  },
  data() {
    return { selected: this.value };
  },
  methods: {
    handleClick(value) {
      this.selected = value;
      this.$emit("change", value);
      this.$emit("input", value);
    },
  },
};
</script>
<style lang="scss" scoped>
// @import"7.css/dist/gui/listbox.css";

.winui-listbox {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
