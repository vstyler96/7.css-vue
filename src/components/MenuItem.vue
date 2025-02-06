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

    <win-menu v-if="children?.length > 0">
      <win-menu-item
        v-for="(child, index) in children"
        :key="index"
        :title="child.title"
        :children="child.children"
      />
    </win-menu>
    <slot v-else name="submenu" />
  </li>
</template>
<script setup>
import { computed, useSlots } from 'vue';
import WinMenuItem from './MenuItem.vue';

const slots = useSlots();
const props = defineProps({
  title: { type: String, default: null },
  children: { type: Array, default: () => [] },
  barParent: { type: Boolean, default: false },
});

const hasSubMenu = computed(() => !!slots.submenu || props.children.length > 0);
const bindAttr = computed(() => {
  if (hasSubMenu.value || props.barParent) {
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
