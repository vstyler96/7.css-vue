import { defineComponent } from 'vue';
import './index.css';

type GroupboxProps = {
  title?: string;
  label?: string;
};

export default defineComponent({
  name: 'WinGroupbox',
  props: {
    title: { type: String, default: null },
    label: { type: String, default: null },
  },
  setup(props: GroupboxProps, { slots }) {
    return () => (
      <fieldset class="winui-groupbox">
        {(props.title || props.label) && (
          <legend>
            {props.title || props.label}
          </legend>
        )}
        {slots.default && slots.default()}
      </fieldset>
    );
  },
});
