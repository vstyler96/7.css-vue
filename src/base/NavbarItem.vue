<template>
  <component
    :is="component"
    :href="href"
    :to="to"
    class="winui-navbar-item"
    :class="{ active: isActive }"
    @click="handleClick"
  >
    <span>
      <slot />
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue';

defineOptions({ name: 'WinNavbarItem' });

const props = defineProps({
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  active: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['click']);

const component = computed(() => {
  if (props.tag) return props.tag;
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});

const isActive = computed(() => {
  return props.active;
});

const handleClick = (event) => {
  emit('click', event);
};
</script>

<style lang="scss" scoped>
.winui-navbar-item {
  cursor: pointer;
  display: flex;
  text-align: center;
  vertical-align: middle;
  line-height: 23px;
  height: 24px;
  padding: 0 12px;
  border-radius: 2px;
  background: transparent;
  border: none;
  color: #fff;
  margin-left: 2px;
  margin-right: 2px;
  font-family: "Segoe UI", sans-serif;
  font-size: 12px;
  font-weight: 400;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear;
  text-decoration: none;

  &:hover {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 0.1)
    );
    text-decoration: none;
    outline: solid thin rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    color: #fff;
  }

  &:active {
    outline: solid thin rgba(0, 0, 0, 0.75);
    box-shadow:
      inset 0 0 8px #00575b,
      inset 0 0 0 1px rgba(255, 255, 255, 0.75);
    background: rgba(234, 234, 234, 0.3);

    & > span {
      transform: translate(1px, 1px);
    }
  }

  &.active {
    outline: solid thin rgba(0, 0, 0, 0.75);
    box-shadow:
      inset 0 0 8px #00575b,
      inset 0 0 0 1px rgba(255, 255, 255, 0.75);
    background: rgba(234, 234, 234, 0.3);
  }
}
</style>
