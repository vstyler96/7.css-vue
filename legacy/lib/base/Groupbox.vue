<template>
  <fieldset class="winui-groupbox">
    <legend v-if="title || label">
      {{ title || label }}
    </legend>
    <slot />
  </fieldset>
</template>
<script setup>
defineOptions({ name: 'WinGroupbox' });
defineProps({
  title: { type: String, default: null },
});
</script>
