<template>
  <button
    v-bind="$attrs"
    class="winui-button"
  >
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.winui-button {
  margin: 4px 8px;
}
</style>
