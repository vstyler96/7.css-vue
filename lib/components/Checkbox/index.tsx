import { defineComponent, computed } from 'vue';
import './index.css';

type CheckboxProps = {
  disabled?: boolean;
  falseValue?: any;
  modelValue?: any;
  name: string;
  label?: string;
  trueValue?: any;
  value?: any;
};

export default defineComponent({
  name: 'WinCheckbox',
  props: {
    disabled: { type: Boolean, default: false },
    falseValue: { type: [Array, Boolean, Number, String, Object], default: undefined },
    modelValue: { type: [Array, Boolean, Number, String, Object], default: false },
    name: { type: String, required: true },
    label: { type: String, default: null },
    trueValue: { type: [Array, Boolean, Number, String, Object], default: undefined },
    value: { type: [Array, Boolean, Number, String, Object], default: true },
  },
  emits: ['update:model-value'],
  setup(props: CheckboxProps, { slots, emit }) {
    const id = computed(() => `${props.name}-checkbox`);

    const checkValue = computed(() => props.trueValue === undefined ? props.value : props.trueValue);
    const uncheckValue = computed(() => props.falseValue === undefined ? false : props.falseValue);

    const checked = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return props.modelValue?.includes(checkValue.value);
      }
      return checkValue.value === props.modelValue;
    });

    function onToggleValue() {
      if (props.disabled) return;

      const isArrayMethod = Array.isArray(props.modelValue);

      if (!isArrayMethod) {
        emit('update:model-value', checked.value ? uncheckValue.value : checkValue.value);
        return;
      }

      if (checked.value) {
        emit('update:model-value', props.modelValue.filter((v: any) => v !== checkValue.value));
        return;
      }

      emit('update:model-value', [
        ...props.modelValue,
        checkValue.value,
      ]);
    }

    return () => (
      <div
        class="winui-checkbox"
        onClick={(e) => {
          e.preventDefault();
          onToggleValue();
        }}
      >
        <input
          id={id.value}
          name={props.name}
          disabled={props.disabled}
          type="checkbox"
          checked={checked.value}
        />
        <label for={id.value}>
          {slots.label ? slots.label() : props.label}
        </label>
      </div>
    );
  },
});
