<template>
  <div>
    <win-button @mouseover="handleMouseover" @mouseout="handleMouseout">
      Hover me!
    </win-button>
    <span>{{ isHovered ? "Xin chào" : "Hello" }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleMouseover() {
      this.isHovered = true;
    },
    handleMouseout() {
      this.isHovered = false;
    },
  },
};
</script>
