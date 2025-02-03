<template>
  <fieldset class="winui-groupbox">
    <legend v-if="label">
      {{ label }}
    </legend>
    <slot />
  </fieldset>
</template>
<script setup>
defineProps({
  label: { type: String, default: 'Group' },
});
</script>
