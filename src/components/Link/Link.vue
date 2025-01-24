<template>
  <a v-if="href" :href="href" class="winui-link">
    <win-icon v-if="icon" :src="icon" :alt="text" :size="16" />
    <span v-if="text">{{ text }}</span>
    <slot v-else />
  </a>
  <button v-else class="winui-link" v-bind="$attrs">
    <win-icon v-if="icon" :src="icon" :alt="text" :size="16" />
    <span v-if="text">{{ text }}</span>
    <slot v-else />
  </button>
</template>
<script>
import WinIcon from "../Icon/Icon.vue";

export default {
  components: { WinIcon },
  name: "WinLink",
  props: {
    icon: String,
    href: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.winui-link {
  font-family: Segoe UI, sans-serif;
  font-weight: normal;
  font-size: inherit;
  display: inline-flex;
  align-items: center;
  color: #06c;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #39f;
  }

  .winui-icon {
    margin-right: 4px;
  }
}
</style>
