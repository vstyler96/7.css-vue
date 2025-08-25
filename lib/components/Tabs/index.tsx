import { defineComponent, computed } from 'vue';
import WinButton from '../Button/index.tsx';
import './index.css';

type TabsProps = {
  modelValue: string;
  tabs: Record<string, string>;
  justified?: boolean;
};

export default defineComponent({
  name: 'WinTabs',
  props: {
    modelValue: { type: String, required: true },
    tabs: { type: Object, required: true },
    justified: { type: Boolean, default: false },
  },
  emits: ['update:model-value'],
  setup(props: TabsProps, { slots, emit }) {
    const activeTab = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:model-value', value);
      },
    });

    return () => (
      <div class="winui-tabs">
        <menu
          role="tablist"
          class={{ 'justified': props.justified }}
        >
          {Object.entries(props.tabs).map(([tab, title]) => (
            <WinButton
              key={tab}
              aria-selected={activeTab.value === tab}
              role="tab"
              onClick={() => {
                activeTab.value = tab;
              }}
            >
              {title}
            </WinButton>
          ))}
        </menu>

        {Object.entries(props.tabs).map(([tab, title]) => (
          <article
            key={tab}
            hidden={activeTab.value !== tab}
            role="tabpanel"
          >
            {slots[tab] ? slots[tab]!({
              title,
              tab,
              hidden: activeTab.value !== tab
            }) : null}
          </article>
        ))}
      </div>
    );
  },
});
