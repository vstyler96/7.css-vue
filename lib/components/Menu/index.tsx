import { defineComponent } from 'vue';
import './index.css';

type MenuProps = {
  canHover?: boolean;
};

export default defineComponent({
  name: 'WinMenu',
  props: {
    canHover: { type: Boolean, default: false },
  },
  setup(props: MenuProps, { slots }) {
    return () => (
      <ul
        class={[
          'winui-menu',
          { 'can-hover': props.canHover },
        ]}
        role="menu"
      >
        {slots.default && slots.default()}
      </ul>
    );
  },
});
