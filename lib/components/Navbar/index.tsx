import { defineComponent } from 'vue';
import WinNavbarItem from '../NavbarItem/index.tsx';
import './index.css';

type NavbarProps = {
  items?: Array<any>;
};

export default defineComponent({
  name: 'WinNavbar',
  props: {
    items: {
      type: Array,
      default: () => [
        { text: 'Home', href: '#' },
        { text: 'Download', href: '#' },
        { text: 'FAQ', href: '#' },
        { text: 'Discord Server', href: '#' }
      ]
    },
  },
  setup(props: NavbarProps, { slots }) {
    return () => (
      <nav
        class={[
          'winui-navbar',
        ]}
      >
        <div class="navbar-content">
          <div class="navbar-items">
            {slots.default ? slots.default() : (
              props.items?.map((item) => (
                <WinNavbarItem
                  key={item.text}
                  {...item}
                >
                  {item.text}
                </WinNavbarItem>
              ))
            )}
          </div>
        </div>
      </nav>
    );
  },
});
