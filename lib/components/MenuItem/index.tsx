import { defineComponent, computed, useSlots } from 'vue';
import WinMenu from '../Menu/index.tsx';
import './index.css';

type MenuItemProps = {
  title?: string;
  children?: Array<any>;
};

export default defineComponent({
  name: 'WinMenuItem',
  props: {
    title: { type: String, default: null },
    children: { type: Array, default: () => [] },
  },
  setup(props: MenuItemProps, { slots, attrs }) {
    const slotInstances = useSlots();

    const hasSubMenu = computed(() => {
      const submenuSlot = slotInstances?.submenu ? slotInstances.submenu() : [];
      const hasSubmenuSlot = submenuSlot?.length > 0;

      return hasSubmenuSlot;
    });

    const itemAttrs = computed(() => {
      if (hasSubMenu.value) {
        return {
          'aria-haspopup': true,
          ...attrs,
        };
      }

      return attrs;
    });

    // Self-reference for recursive menu items
    const WinMenuItem = defineComponent({
      name: 'WinMenuItem',
      props: {
        title: { type: String, default: null },
        children: { type: Array, default: () => [] },
      },
      setup(childProps) {
        return () => (
          <li
            class="winui-menuitem"
            role="menuitem"
          >
            <label class="winui-menuitem-button">
              {childProps.title}
            </label>
          </li>
        );
      },
    });

    return () => (
      <li
        class="winui-menuitem"
        role="menuitem"
        {...itemAttrs.value}
      >
        {slots.default ? slots.default() : (
          hasSubMenu.value ? (
            <span>{props.title}</span>
          ) : (
            <label class="winui-menuitem-button">
              {props.title}
            </label>
          )
        )}

        {(slots.submenu || (props.children && props.children.length > 0)) && (
          slots.submenu ? slots.submenu() : (
            <WinMenu>
              {props.children?.map((child, index) => (
                <WinMenuItem
                  key={index}
                  title={child.title}
                  children={child.children}
                />
              ))}
            </WinMenu>
          )
        )}
      </li>
    );
  },
});
