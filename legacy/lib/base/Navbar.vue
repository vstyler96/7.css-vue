<template>
  <nav class="winui-navbar" :class="{ glass: glassMorphism }">
    <div class="navbar-content">
      <div class="navbar-items">
        <slot>
          <!-- Default items if no slot content provided -->
          <win-navbar-item
            v-for="item in items"
            :key="item.text"
            v-bind="item"
          >
            {{ item.text }}
          </win-navbar-item>
        </slot>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineOptions({ name: 'WinNavbar' });

defineProps({
  items: {
    type: Array,
    default: () => [
      { text: 'Home', href: '#' },
      { text: 'Download', href: '#' },
      { text: 'FAQ', href: '#' },
      { text: 'Discord Server', href: '#' }
    ]
  },
  glassMorphism: {
    type: Boolean,
    default: true
  }
});
</script>

<style lang="scss" scoped>
.winui-navbar {
  background: linear-gradient(
    to bottom,
    #87b2c0,
    #468a9e 50%,
    #105c77 50%,
    #529cab
  );
  outline: solid thin rgba(0, 0, 0, 0.5);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.5),
    0 0 16px #015c5f;
  position: relative;
  z-index: 9;
  height: 32px;

  &.glass {
    backdrop-filter: blur(8px);
    background: linear-gradient(
      to bottom,
      rgba(135, 178, 192, 0.9),
      rgba(70, 138, 158, 0.9) 50%,
      rgba(16, 92, 119, 0.9) 50%,
      rgba(82, 156, 171, 0.9)
    );
  }
}

.navbar-content {
  display: flex;
  align-items: center;
  padding: 0 4px;
  height: 32px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

.navbar-items {
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
}

:deep(.winui-navbar-item) {
  cursor: default;
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
