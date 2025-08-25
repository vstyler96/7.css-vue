import { defineComponent, computed } from 'vue';
import './index.css';

type ProgressProps = {
  variant?: string;
  inert?: boolean;
  transition?: number | string;
  indeterminate?: boolean;
  progress?: number | string;
};

export default defineComponent({
  name: 'WinProgress',
  props: {
    variant: { type: String, default: "success" },
    inert: { type: Boolean, default: false },
    transition: { type: [Number, String], default: 300 },
    indeterminate: { type: Boolean, default: false },
    progress: {
      type: [Number, String],
      default: 0,
      validator(value: number | string) {
        if (typeof value === 'string' && isNaN(Number(value))) {
          return value.endsWith("%");
        }
        const numValue = Number(value);
        return (numValue >= 0 && numValue <= 100);
      },
    },
  },
  setup(props: ProgressProps) {
    const ariaValues = computed(() => {
      if (props.indeterminate) return {};

      const progressValue = typeof props.progress === 'string' && isNaN(Number(props.progress))
        ? Number(props.progress.slice(0, -1))
        : Number(props.progress);

      return {
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": progressValue,
      };
    });

    const progressStyle = computed(() => {
      if (props.indeterminate) return {};

      return {
        '--progress': isNaN(Number(props.progress)) ? props.progress : props.progress + '%',
        '--transition': Number(props.transition) / 1000 + 's',
      };
    });

    return () => (
      <div
        role="progressbar"
        class={[
          'winui-progress',
          props.variant,
          {
            'marquee': props.indeterminate,
            'animate': !props.inert
          }
        ]}
        {...ariaValues.value}
      >
        {!props.indeterminate && (
          <div style={progressStyle.value} />
        )}
      </div>
    );
  },
});
