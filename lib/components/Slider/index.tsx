import { defineComponent, computed } from 'vue';
import './index.css';

type SliderProps = {
  modelValue?: string | number;
};

export default defineComponent({
  name: 'WinSlider',
  props: {
    modelValue: { type: [String, Number], default: 0 },
  },
  emits: ['update:model-value'],
  setup(props: SliderProps, { attrs, emit }) {
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:model-value", value);
      },
    });

    return () => (
      <input
        type="range"
        class="winui-slider"
        value={model.value}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          model.value = target.value;
        }}
        {...attrs}
      />
    );
  },
});
