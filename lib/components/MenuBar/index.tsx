import { defineComponent } from 'vue';
import './index.css';

type MenuBarProps = {
  canHover?: boolean;
};

export default defineComponent({
  name: 'WinMenuBar',
  props: {
    canHover: { type: Boolean, default: false },
  },
  setup(props: MenuBarProps, { slots }) {
    return () => (
      <ul
        class={[
          'winui-menubar',
          { 'can-hover': props.canHover },
        ]}
        role="menubar"
      >
        {slots.default && slots.default()}
      </ul>
    );
  },
});
