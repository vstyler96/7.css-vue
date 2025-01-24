<template>
  <input
    type="range"
    class="winui-slider"
    :value="value"
    @input="$emit('input', $event.target.value)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "WinSlider",
  alias: "WinRange",
  props: {
    value: [String, Number],
  },
  computed: {
    // @TODO: Implement listeners
    // listeners() {
    //   // excluding the `input` listener for v-model
    //   const listeners = this.$listeners;
    //   delete listeners.input;
    //   return listeners;
    // },
  },
};
</script>

<style scoped lang="scss">
// @import"7.css/dist/gui/slider.css";
</style>
