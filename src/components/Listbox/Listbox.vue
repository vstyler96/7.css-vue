<template>
  <ul role="listbox" class="winui-listbox">
    <li
      v-for="item in items"
      role="option"
      :key="item.value"
      :aria-selected="selected === item.value"
      @click="handleClick(item.value)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "WinListbox",
  props: {
    value: [Number, String],
    items: { type: Array, required: true },
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
