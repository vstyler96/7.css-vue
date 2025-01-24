<template>
  <win-checkbox id="check_binding" v-model="isChecked">
    This check box is {{ isChecked ? "checked" : "unchecked" }}
  </win-checkbox>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>
