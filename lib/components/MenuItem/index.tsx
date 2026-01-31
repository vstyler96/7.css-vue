import { defineComponent, computed, useSlots } from 'vue';
import './index.css';

type OptionType = {
  as: 'checkbox' | 'radio';
  id: string;
  name?: string;
  nativeValue?: any;
};

type MenuItemProps = {
  option?: OptionType;
  modelValue?: any;
  value?: any;
};

export default defineComponent({
  name: 'WinMenuItem',
  props: {
    option: { type: Object, default: undefined },
    modelValue: { type: [String, Number, Boolean, Array], default: undefined },
    value: { type: [String, Number, Boolean], default: undefined },
  },
  emits: ['update:modelValue'],
  setup(props: MenuItemProps, { slots, emit }) {
    const slotInstances = useSlots();

    const hasSubmenu = computed(() => {
      const defaultSlot = slotInstances?.default ? slotInstances.default() : [];
      return defaultSlot.some((node: any) => {
        const type = node.type;
        return type?.name === 'WinMenu' || 
               (typeof type === 'string' && type === 'ul') ||
               node.props?.class?.includes?.('winui-menu');
      });
    });

    const isChecked = computed(() => {
      if (!props.option) return false;
      
      if (props.option.as === 'radio') {
        return props.modelValue === props.option.nativeValue;
      }
      
      if (props.option.as === 'checkbox') {
        if (props.value !== undefined) {
          return props.modelValue === props.value;
        }
        if (Array.isArray(props.modelValue)) {
          return props.modelValue.includes(props.option.id);
        }
        return !!props.modelValue;
      }
      
      return false;
    });

    function handleOptionChange(event: Event) {
      if (!props.option) return;
      
      event.stopPropagation();

      if (props.option.as === 'radio') {
        emit('update:modelValue', props.option.nativeValue);
      } else if (props.option.as === 'checkbox') {
        if (props.value !== undefined) {
          emit('update:modelValue', isChecked.value ? undefined : props.value);
          return;
        }
        
        if (Array.isArray(props.modelValue)) {
          const newValue = isChecked.value
            ? props.modelValue.filter((v: any) => v !== props.option!.id)
            : [...props.modelValue, props.option.id];
          emit('update:modelValue', newValue);
          return;
        }
        
        emit('update:modelValue', !props.modelValue);
      }
    }

    return () => {
      // If option prop is provided, render as checkbox or radio
      if (props.option) {
        const inputId = props.option.id;
        const inputType = props.option.as;
        const inputName = props.option.name || props.option.id;

        return (
          <li
            class="winui-menuitem"
            role="menuitem"
          >
            <input
              id={inputId}
              type={inputType}
              name={inputName}
              value={props.option.nativeValue ?? props.value}
              checked={isChecked.value}
              onChange={handleOptionChange}
            />
            <label for={inputId}>
              {slots.default && slots.default()}
            </label>
          </li>
        );
      }

      // Regular menu item
      return (
        <li
          class="winui-menuitem"
          role="menuitem"
          aria-haspopup={hasSubmenu.value ? true : undefined}
        >
          {slots.default && slots.default()}
        </li>
      );
    };
  },
});
