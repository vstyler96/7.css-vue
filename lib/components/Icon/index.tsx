import { defineComponent } from 'vue';
import './index.css';

type IconProps = {
  icon: string;
  size?: string | number;
};

const icons: Record<string, string> = {
  monitor: 'M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z',
};

export default defineComponent({
  name: 'WinIcon',
  props: {
    icon: { type: String, required: true },
    size: { type: [String, Number], default: 24 },
  },
  setup(props: IconProps) {
    return () => (
      <span class="winui-icon">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.size}px`}
          height={`${props.size}px`}
        >
          <path d={icons[props.icon]} />
        </svg>
      </span>
    );
  },
});
