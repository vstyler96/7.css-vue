<template>
  <ul
    class="winui-menubar"
    role="menubar"
  >
    <slot />
  </ul>
</template>
<script setup>
defineOptions({ name: 'WinMenuBar' });
</script>
