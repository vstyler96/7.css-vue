<template>
  <win-groupbox title="Checkboxes">
    <win-checkbox
      v-model="uniqueCheckbox"
      name="check"
      label="Accept terms and conditions"
    />

    Final value: {{ uniqueCheckbox }}

    <hr>

    <win-checkbox
      v-model="checkboxArray"
      name="newspaper"
      label="I want to receive the Newspaper"
      value="newspaper"
    />
    <win-checkbox
      v-model="checkboxArray"
      name="payment"
      label="I accept the payment terms"
      value="payment"
    />
    <win-checkbox
      v-model="checkboxArray"
      name="privacy"
      disabled
      label="I aknowledge the privacy policy"
      value="privacy"
    />

    Final value: {{ checkboxArray }}
  </win-groupbox>
</template>
<script setup>
import { ref } from 'vue';

const uniqueCheckbox = ref(false);
const checkboxArray = ref(['payment']);
</script>
