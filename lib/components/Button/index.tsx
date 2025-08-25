import { defineComponent } from 'vue';
import './index.css';

type ButtonProps = {
  text?: string;
  to?: string;
  href?: string;
  target?: string;
  role?: string;
  onClick?: () => void;
};

export default defineComponent({
  name: 'WinButton',
  inheritAttrs: false,
  props: {
    text: String,
    to: String,
    href: String,
    target: String,
    role: String,
    onClick: Function,
  },
  setup(props: ButtonProps, { slots, attrs }) {
    const Tag = props.href ? 'a' : 'button';

    return () => (
      <Tag
        {...attrs}
        class="winui-button"
        href={props.href}
        target={props.target}
        role={props.role}
        onClick={props.onClick}
      >
        {slots.prepend && slots.prepend()}
        {slots.default ? slots.default() : props.text}
        {slots.append && slots.append()}
      </Tag>
    )
  },
});
