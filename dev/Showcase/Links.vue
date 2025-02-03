<template>
  <win-groupbox label="Links">
    <win-link
      text="link"
      href="#"
      prepend-icon="monitor"
    />
    <win-link
      text="button"
      href="#"
      @click="handleLinkClick"
    />
  </win-groupbox>
</template>
<script setup>
function handleLinkClick() {
  alert("ok");
}
</script>
