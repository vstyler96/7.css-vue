<template>
  <li
    v-bind="attrs"
    class="winui-menuitem"
    role="menuitem"
  >
    <slot>
      <label v-if="!hasSubMenu" class="winui-menuitem-button">
        {{ title }}
      </label>
      <template v-else>
        {{ title }}
      </template>
    </slot>

    <slot
      v-if="$slots.submenu || children?.length > 0"
      name="submenu"
    >
      <WinMenu v-if="children?.length > 0">
        <WinMenuItem
          v-for="(child, index) in children"
          :key="index"
          :title="child.title"
          :children="child.children"
        />
      </WinMenu>
    </slot>
  </li>
</template>
<script setup>
import { computed, useSlots } from 'vue';
import WinMenu from './Menu.vue';
import WinMenuItem from './MenuItem.vue';

defineOptions({ name: 'WinMenuItem' });
const slots = useSlots();
defineProps({
  title: { type: String, default: null },
  children: { type: Array, default: () => [] },
});

const hasSubMenu = computed(() => {
  const submenuSlot = slots?.submenu ? slots.submenu() : [];
  const hasSubmenuSlot = submenuSlot?.length > 0;

  return hasSubmenuSlot;
});


const attrs = computed(() => {
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
  cursor: pointer;
}
</style>
