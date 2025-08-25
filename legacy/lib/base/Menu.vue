<template>
  <ul
    class="winui-menu"
    role="menu"
  >
    <slot />
  </ul>
</template>
<script setup>
defineOptions({ name: 'WinMenu' });
</script>
