import { defineComponent } from 'vue';
import './index.css';

type BalloonProps = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  caption?: string;
};

export default defineComponent({
  name: 'WinBalloon',
  props: {
    top: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    caption: { type: String, default: null },
  },
  setup(props: BalloonProps, { slots }) {
    return () => (
      <div
        role="tooltip"
        class={[
          "winui-balloon",
          {
            "is-bottom": props.bottom,
            "is-top": props.top,
            "is-left": props.left,
            "is-right": props.right,
          },
        ]}
      >
        {slots.default ? slots.default() : props.caption}
      </div>
    );
  },
});
