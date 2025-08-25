<template>
  <win-dropdown
    v-model="dropdownValue"
    :options="options"
  />

  You selected the option: {{ dropdownValue }}
</template>
<script setup>
import { ref } from "vue";

const dropdownValue = ref("option1");

const options = [
  { id: "option1", name: "Option 1" },
  { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" },
  { id: "option4", name: "Option 4" },
  { id: "option5", name: "Option 5", disabled: true },
];
</script>
