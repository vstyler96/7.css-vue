import { defineComponent } from 'vue';
import WinIcon from '../Icon/index.tsx';
import './index.css';

type LinkProps = {
  prependIcon?: string;
  href?: string;
  text?: string;
  to?: string | object;
  target?: string;
};

export default defineComponent({
  name: 'WinLink',
  props: {
    prependIcon: { type: String, default: null },
    href: { type: String, default: null },
    text: { type: String, default: null },
    to: { type: [String, Object], default: null },
    target: { type: String, default: null },
  },
  setup(props: LinkProps, { slots, attrs }) {
    const Tag = (props.href || props.to) ? 'a' : 'button';

    return () => (
      <Tag
        class="winui-link"
        href={props.href}
        target={props.target}
        {...attrs}
      >
        {props.prependIcon && (
          <WinIcon
            icon={props.prependIcon}
            size="16"
          />
        )}
        {slots.default ? slots.default() : (
          <span>{props.text}</span>
        )}
      </Tag>
    );
  },
});
