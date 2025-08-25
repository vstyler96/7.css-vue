<template>
  <win-tabs
    v-model="tab"
    :tabs="tabs"
  >
    <template #apps="{ title }">
      Let's explore {{ title }}
      <win-groupbox :title="title">
        We are in the {{ title }} section :D
      </win-groupbox>
    </template>
    <template #games="{ title }">
      Let's explore {{ title }}
      <win-groupbox :title="title">
        We are in the {{ title }} section :D
      </win-groupbox>
    </template>
    <template #softs="{ title }">
      Let's explore {{ title }}
      <win-groupbox :title="title">
        We are in the {{ title }} section :D
      </win-groupbox>
    </template>
  </win-tabs>
</template>
<script setup>
import { ref } from 'vue';

const tab = ref('apps');
const tabs = {
  apps: "Apps",
  games: "Games",
  softs: "Software",
};
</script>
