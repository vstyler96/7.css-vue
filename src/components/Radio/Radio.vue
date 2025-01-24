<template>
  <div class="winui-radio">
    <input
      v-model="computedValue"
      :id="id"
      :name="name"
      :disabled="disabled"
      :value="nativeValue"
      type="radio"
    />
    <slot>
      <label :for="id" />
    </slot>
  </div>
</template>

<script>
export default {
  name: "WinRadio",
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    value: [Number, String, Boolean],
    nativeValue: [Number, String, Boolean],
    disabled: Boolean,
  },
  computed: {
    computedValue: {
      get() {
        return this.input;
      },
      set(value) {
        this.input = value;
        this.$emit("input", value);
      },
    },
  },
  data() {
    return {
      input: this.value,
    };
  },
  watch: {
    value(value) {
      this.input = value;
    },
  },
};
</script>

<style scoped lang="scss">
// @import"7.css/dist/gui/radiobutton.css";
</style>
