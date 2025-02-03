<template>
  <li
    v-bind="bindAttr"
    class="winui-menuitem"
    role="menuitem"
  >
    <slot name="title">
      <button v-if="!hasSubMenu">
        {{ title }}
      </button>
      <template v-else>
        {{ title }}
      </template>
    </slot>

    <slot name="submenu">
      <win-menu>
        <win-menu-item
          v-for="(child, index) in children"
          :key="index"
          :title="child.title"
          :children="child.children"
        />
      </win-menu>
    </slot>
  </li>
</template>
<script setup>
import { computed, useSlots } from 'vue';

const slots = useSlots();
const props = defineProps({
  title: { type: String, required: true },
  children: { type: Array, default: () => [] },
});

const hasSubMenu = computed(() => slots.submenu !== null || props.children.length > 0);
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
