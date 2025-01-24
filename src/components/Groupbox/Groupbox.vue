<template>
  <fieldset class="winui-groupbox">
    <legend v-if="label">{{ label }}</legend>
    <slot />
  </fieldset>
</template>
<script setup>
defineProps({
  label: { type: String },
});
</script>
<style scoped lang="scss">
// @import"7.css/dist/gui/groupbox.css";
</style>
