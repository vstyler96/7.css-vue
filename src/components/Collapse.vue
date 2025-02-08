<template>
  <details
    :id="id"
    class="winui-collapse"
    :open="model"
    @toggle="model = !model"
  >
    <summary class="collapse-title">
      <slot name="title">
        <win-icon
          v-if="prependIcon"
          :icon="prependIcon"
          size="16"
        />
        <span>
          {{ title }}
        </span>
      </slot>
    </summary>

    <slot>
      <ul v-if="children?.length > 0">
        <li
          v-for="child in children"
          :key="child.id"
        >
          <win-collapse
            v-if="child.children"
            :title="child.title"
            :prepend-icon="child.prependIcon"
            :children="child.children"
          />
          <template v-else>
            {{ child.title }}
          </template>
        </li>
      </ul>
    </slot>
  </details>
</template>
<script setup>
import { computed } from 'vue';
import { uniqueId } from '../helpers.js';

const id = `winui-collapse-${uniqueId()}`;

const emit = defineEmits(['update:open']);
const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, required: true },
  prependIcon: { type: String, default: null },
  children: { type: Array, default: () => [] },
});

const model = computed({
  get() {
    return props.open;
  },
  set(value) {
    emit('update:open', value);
  },
});
</script>
<style scoped lang="scss">
.collapse-title {
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
}
</style>
