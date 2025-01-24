<template>
  <win-button @click="handleClick">Click me!</win-button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("Hello, world!");
    },
  },
};
</script>
