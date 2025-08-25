import { defineComponent, computed } from 'vue';
import './index.css';

type NavbarItemProps = {
  href?: string;
  to?: string | object;
  active?: boolean;
  tag?: string;
};

export default defineComponent({
  name: 'WinNavbarItem',
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: null
    }
  },
  emits: ['click'],
  setup(props: NavbarItemProps, { slots, emit }) {
    const component = computed(() => {
      if (props.tag) return props.tag;
      if (props.to) return 'router-link';
      if (props.href) return 'a';
      return 'button';
    });

    const isActive = computed(() => {
      return props.active;
    });

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return () => {
      const Tag = component.value as any;

      return (
        <Tag
          href={props.href}
          to={props.to}
          class={[
            'winui-navbar-item',
            { 'active': isActive.value }
          ]}
          onClick={handleClick}
        >
          <span>
            {slots.default && slots.default()}
          </span>
        </Tag>
      );
    };
  },
});
