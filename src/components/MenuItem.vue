<template>
  <li
    v-bind="bindAttr"
    class="winui-menuitem"
    role="menuitem"
  >
    <slot>
      <button v-if="!hasSubMenu">
        {{ label }}
      </button>
      <template v-else>
        {{ label }}
      </template>
    </slot>

    <slot name="menu" />
  </li>
</template>
<script setup>
import { useSlots } from '@vue/runtime-core';
import { computed } from '@vue/reactivity';

defineProps({
  label: { type: String },
});

const slots = useSlots();

const hasSubMenu = computed(() => {
  return slots.menu !== undefined;
});

const bindAttr = computed(() => {
  if (hasSubMenu.value) {
    return {
      'aria-haspopup': true,
    };
  }

  return {};
});
</script>
<style scoped>
.winui-menuitem {
  user-select: none;
}
</style>
