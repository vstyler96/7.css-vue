<template>
  <fieldset class="winui-groupbox">
    <legend v-if="title || label">
      {{ title || label }}
    </legend>
    <slot />
  </fieldset>
</template>
<script setup>
defineProps({
  title: { type: String, default: null },
  /**
   * @deprecated Please use title instead, it will be deleted on the next release.
   */
  label: {
    type: String,
    default: null,
    validator() {
      throw new Error('The prop "label" is deprecated. Please use "title" instead.');
    },
  },
});
</script>
