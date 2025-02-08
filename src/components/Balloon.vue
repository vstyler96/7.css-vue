<template>
  <div
    role="tooltip"
    class="winui-balloon"
    :class="{ 'is-bottom': bottom, 'is-top': top, 'is-left': left, 'is-right': right }"
  >
    <slot>
      {{ caption }}
    </slot>
  </div>
</template>
<script setup>
defineProps({
  top: { type: Boolean, default: false },
  bottom: { type: Boolean, default: false },
  left: { type: Boolean, default: false },
  right: { type: Boolean, default: false },
  caption: {  type: String, default: null },
})
</script>
