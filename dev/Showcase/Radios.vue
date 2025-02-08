<template>
  <win-groupbox title="Radio buttons">
    <win-textbox v-model="theme" readonly />
    <win-radio
      v-model="theme"
      value="light"
      name="theme"
      label="Light"
    />
    <win-radio
      v-model="theme"
      value="dark"
      name="theme"
      label="Dark"
    />
    <win-radio
      v-model="theme"
      value="auto"
      name="theme"
      label="Auto"
      disabled
    />
  </win-groupbox>
</template>
<script setup>
import { ref } from 'vue';

const theme = ref('light');
</script>
