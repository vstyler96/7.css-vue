import { defineComponent, computed } from 'vue';
import WinIcon from '../Icon/index.tsx';
import { uniqueId } from '../../utils/helpers';
import './index.css';

type CollapseProps = {
  open?: boolean;
  title: string;
  prependIcon?: string;
  children?: Array<any>;
};

export default defineComponent({
  name: 'WinCollapse',
  props: {
    open: { type: Boolean, default: false },
    title: { type: String, required: true },
    prependIcon: { type: String, default: null },
    children: { type: Array, default: () => [] },
  },
  emits: ['update:open'],
  setup(props: CollapseProps, { slots, emit }) {
    const id = `winui-collapse-${uniqueId()}`;

    const model = computed({
      get() {
        return props.open;
      },
      set(value) {
        emit('update:open', value);
      },
    });

    // Self-reference for recursive collapse items
    const WinCollapse = defineComponent({
      name: 'WinCollapse',
      props: {
        title: { type: String, required: true },
        prependIcon: { type: String, default: null },
        children: { type: Array, default: () => [] },
      },
      setup(childProps) {
        return () => (
          <li>
            {childProps.children && childProps.children.length > 0 ? (
              <WinCollapse
                title={childProps.title}
                prependIcon={childProps.prependIcon}
                children={childProps.children}
              />
            ) : (
              <span>{childProps.title}</span>
            )}
          </li>
        );
      },
    });

    return () => (
      <details
        id={id}
        class="winui-collapse"
        open={model.value}
        onToggle={() => {
          model.value = !model.value;
        }}
      >
        <summary class="collapse-title">
          {slots.title ? slots.title() : (
            <>
              {props.prependIcon && (
                <WinIcon
                  icon={props.prependIcon}
                  size="16"
                />
              )}
              <span>
                {props.title}
              </span>
            </>
          )}
        </summary>

        {slots.default ? slots.default() : (
          props.children && props.children.length > 0 && (
            <ul>
              {props.children.map((child) => (
                <WinCollapse
                  key={child.id}
                  title={child.title}
                  prependIcon={child.prependIcon}
                  children={child.children}
                />
              ))}
            </ul>
          )
        )}
      </details>
    );
  },
});
