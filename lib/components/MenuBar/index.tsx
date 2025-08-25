import { defineComponent } from 'vue';
import './index.css';

export default defineComponent({
  name: 'WinMenuBar',
  setup(_props, { slots }) {
    return () => (
      <ul
        class="winui-menubar"
        role="menubar"
      >
        {slots.default && slots.default()}
      </ul>
    );
  },
});
