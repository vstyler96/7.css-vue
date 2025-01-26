<template>
  <textarea
    v-if="type === 'textarea'"
    v-bind="$attrs"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="winui-textbox"
  />
  <input
    v-else
    v-bind="$attrs"
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="winui-textbox"
  />
</template>

<script>
export default {
  name: "WinTextbox",
  props: {
    type: { type: String, default: "text" },
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
// @import"7.css/dist/gui/textbox.css";
</style>
