import { defineComponent, computed } from 'vue';
import './index.css';

type ListboxProps = {
  modelValue: number | string;
  options: Array<any>;
  itemValue?: string;
  itemText?: string;
};

export default defineComponent({
  name: 'WinListbox',
  props: {
    modelValue: { type: [Number, String], required: true },
    options: { type: Array, required: true },
    itemValue: { type: String, default: 'id' },
    itemText: { type: String, default: 'name' },
  },
  emits: ['update:model-value'],
  setup(props: ListboxProps, { emit }) {
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:model-value", value);
      },
    });

    function bindAttr(option: any) {
      if (option[props.itemValue!] === model.value) {
        return { 'aria-selected': true };
      }
      return {};
    }

    function onClick(optionValue: any) {
      model.value = optionValue;
    }

    return () => (
      <ul
        role="listbox"
        class="winui-listbox"
      >
        {props.options.map((option) => (
          <li
            key={option[props.itemValue!]}
            role="option"
            {...bindAttr(option)}
            onClick={() => onClick(option[props.itemValue!])}
          >
            {option[props.itemText!]}
          </li>
        ))}
      </ul>
    );
  },
});
