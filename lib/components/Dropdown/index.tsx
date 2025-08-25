import { defineComponent, computed } from 'vue';
import './index.css';

type DropdownProps = {
  modelValue?: string | number | null;
  options?: Array<any>;
  placeholder?: string;
  itemValue?: string;
  itemTitle?: string;
};

export default defineComponent({
  name: 'WinDropdown',
  props: {
    modelValue: { type: [Number, String], default: null },
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: null },
    itemValue: { type: String, default: "id" },
    itemTitle: { type: String, default: "name" },
  },
  emits: ['update:model-value'],
  setup(props: DropdownProps, { slots, emit }) {
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:model-value", value);
      },
    });

    return () => (
      <select
        class="winui-dropdown"
        value={model.value}
        onChange={(e) => {
          const target = e.target as HTMLSelectElement;
          model.value = target.value;
        }}
      >
        {slots.placeholder ? slots.placeholder() : (
          props.placeholder && (
            <option
              value={undefined}
              disabled
              selected
            >
              {props.placeholder}
            </option>
          )
        )}
        {slots.options ? slots.options() : (
          props.options?.map((option) => (
            <option
              key={option[props.itemValue!]}
              value={option[props.itemValue!]}
              disabled={option.disabled}
              selected={model.value === option[props.itemValue!]}
            >
              {option[props.itemTitle!]}
            </option>
          ))
        )}
      </select>
    );
  },
});
