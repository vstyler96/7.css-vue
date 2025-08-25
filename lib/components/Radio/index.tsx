import { defineComponent, computed } from 'vue';
import './index.css';

type RadioProps = {
  name: string;
  modelValue?: number | string | boolean | null;
  value: number | string | boolean;
  disabled?: boolean;
  label: string;
};

export default defineComponent({
  name: 'WinRadio',
  props: {
    name: { type: String, required: true },
    modelValue: { type: [Number, String, Boolean], default: null },
    value: { type: [Number, String, Boolean], required: true },
    disabled: { type: Boolean, default: false },
    label: { type: String, required: true },
  },
  emits: ['update:model-value'],
  setup(props: RadioProps, { slots, emit }) {
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:model-value", value);
      },
    });

    const id = computed(() => `${props.name}-${props.value}-radio`);

    return () => (
      <div class="winui-radio">
        <input
          id={id.value}
          type="radio"
          name={props.name}
          value={props.value}
          checked={model.value === props.value}
          disabled={props.disabled}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
              model.value = props.value;
            }
          }}
        />
        {slots.default ? slots.default() : (
          <label for={id.value}>
            {props.label}
          </label>
        )}
      </div>
    );
  },
});
