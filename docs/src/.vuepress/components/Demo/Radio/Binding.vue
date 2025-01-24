<template>
  <div>
    <win-radio
      id="radio_light"
      name="radio_mode"
      nativeValue="light"
      v-model="mode"
    >
      Light
    </win-radio>
    <win-radio
      id="radio_dark"
      name="radio_mode"
      nativeValue="dark"
      v-model="mode"
    >
      Dark
    </win-radio>
    <win-radio
      id="radio_auto"
      name="radio_mode"
      nativeValue="auto"
      v-model="mode"
    >
      Auto
    </win-radio>
    <div>Your preferred mode: {{ mode }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "auto",
    };
  },
};
</script>
