<template>
  <div class="winui-tabs">
    <menu
      role="tablist"
      :class="{ justified }"
    >
      <win-button
        v-for="(title, tab) in tabs"
        :key="tab"
        :aria-selected="activeTab === tab"
        role="tab"
        @click="activeTab = tab"
      >
        {{ title }}
      </win-button>
    </menu>
    <article
      v-for="(title, tab) in tabs"
      :key="tab"
      :hidden="activeTab !== tab"
      role="tabpanel"
    >
      <slot
        v-bind="{ title, tab }"
        :name="tab"
        :hidden="activeTab !== tab"
      />
    </article>
  </div>
</template>
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'WinTabs' });
const emit = defineEmits(['update:model-value']);
const props = defineProps({
  modelValue: { type: String, required: true },
  tabs: { type: Object, required: true },
  justified: { type: Boolean, default: false },
});

const activeTab = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:model-value', value);
  },
});
</script>
