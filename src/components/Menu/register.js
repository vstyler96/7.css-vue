import { Plugin } from "@/utils/component";
import MenuCmp from "./Menu.vue";
import MenuBarCmp from "./MenuBar.vue";
import MenuItemCmp from "./MenuItem.vue";

export const Menu = Plugin('win-menu', MenuCmp);
export const MenuBar = Plugin('win-menubar', MenuBarCmp);
export const MenuItem = Plugin('win-menuitem', MenuItemCmp);
