<template>
  <a
    v-if="href || to"
    class="winui-link"
    :href="href"
    :target="$attrs.target"
  >
    <win-icon
      v-if="prependIcon"
      :icon="prependIcon"
      size="16"
    />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </a>
  <button
    v-else
    v-bind="$attrs"
    class="winui-link"
  >
    <win-icon
      v-if="prependIcon"
      :icon="prependIcon"
      size="16"
    />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>
<script setup>
import WinIcon from "./Icon.vue";

defineProps({
  prependIcon: { type: String, default: null },
  href: { type: String, default: null },
  text: { type: String, required: true },
  to: { type: [String, Object], default: null },
});
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
  margin: 4px 8px;

  &:hover {
    color: #39f;
  }

  .winui-icon {
    margin-right: 4px;
  }
}
</style>
