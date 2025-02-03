<template>
  <li
    v-bind="bindAttr"
    class="winui-menuitem"
    role="menuitem"
  >
    <slot>
      <button v-if="!hasSubMenu">
        {{ title }}
      </button>
      <template v-else>
        {{ title }}
      </template>
    </slot>

    <slot name="menu" />
  </li>
</template>
<script setup>
import { useSlots } from 'vue-core';
import { computed } from 'vue';

defineProps({
  title: { type: String, required: true },
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
