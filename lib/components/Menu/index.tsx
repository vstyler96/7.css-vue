import { defineComponent } from 'vue';
import './index.css';

export default defineComponent({
  name: 'WinMenu',
  setup(_props, { slots }) {
    return () => (
      <ul
        class="winui-menu"
        role="menu"
      >
        {slots.default && slots.default()}
      </ul>
    );
  },
});
