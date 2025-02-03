<template>
  <win-tabs :tabs="tabs">
    <template #apps>
      apps
    </template>
    <template #games>
      games
    </template>
    <template #softs>
      softs
    </template>
  </win-tabs>
</template>
<script setup>
const tabs = {
  apps: "Apps",
  games: "Games",
  softs: "Software",
};
</script>
