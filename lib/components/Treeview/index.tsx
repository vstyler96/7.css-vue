import { defineComponent } from 'vue';
import './index.css';

export default defineComponent({
  name: 'WinTreeview',
  setup(_props, { slots }) {
    return () => (
      <ul class="tree-view winui-treeview">
        {slots.default && slots.default()}
      </ul>
    );
  },
});
