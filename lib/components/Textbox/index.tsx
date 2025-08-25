import { defineComponent, computed } from 'vue';
import './index.css';

type TextboxProps = {
  modelValue: string;
  type?: string;
  readonly?: boolean;
};

export default defineComponent({
  name: 'WinTextbox',
  props: {
    modelValue: { type: String, required: true },
    type: { type: String, default: "text" },
    readonly: { type: Boolean, default: false },
  },
  emits: ['update:model-value'],
  setup(props: TextboxProps, { attrs, emit }) {
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:model-value", value);
      },
    });

    const commonProps = {
      class: "winui-textbox",
      readonly: props.readonly,
      value: model.value,
      onInput: (e: Event) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        model.value = target.value;
      },
      ...attrs,
    };

    return () => {
      if (props.type === 'textarea') {
        return <textarea {...commonProps} />;
      }

      return (
        <input
          type={props.type}
          {...commonProps}
        />
      );
    };
  },
});
