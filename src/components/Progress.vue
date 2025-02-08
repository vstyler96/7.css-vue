<template>
  <div
    v-bind="ariaValues"
    role="progressbar"
    :class="['winui-progress', { [variant]: true, marquee: indeterminate, animate: !inert }]"
  >
    <div
      v-if="!indeterminate"
      :style="{
        '--progress': isNaN(progress) ? progress : progress + '%',
        '--transition': transition / 1000 + 's',
      }"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: "success" },
  inert: { type: Boolean, default: false },
  transition: { type: [Number, String], default: 300 },
  indeterminate: { type: Boolean, default: false },
  progress: {
    type: [Number, String],
    default: 0,
    validator(value) {
      if (isNaN(value)) return value?.endsWith("%");
      return (value >= 0 && value <= 100);
    },
  },
});

const ariaValues = computed(() => {
  if (props.indeterminate) return {};

  return {
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": isNaN(props.progress) ? Number(props.progress.slice(0, -1)) : this.progress,
  };
});
</script>
<style lang="scss" scoped>
.winui-progress > div {
  width: var(--progress);
  transition: width var(--transition) linear;
}

.classic {
  background: #7c94ae;
  border-color: #7c94ae;
  border-radius: 0;
  height: 10px;

  > div {
    background: #9acb37;
  }
}
</style>
