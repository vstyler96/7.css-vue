<template>
  <button class="winui-button" v-bind="$attrs">
    <slot />
  </button>
</template>
<script setup>
//
</script>
<style lang="scss" scoped>
// @import"7.css/dist/gui/button.css";

.winui-button {
  color: #222;

  &:disabled {
    background: #f4f4f4;
    border-color: #aeb2b5;
    box-shadow: none;
  }

  &.round {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    min-width: unset;
    padding: 0;
  }
}
</style>
