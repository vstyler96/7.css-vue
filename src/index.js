import Balloon from "./components/Balloon.vue";
import Button from "./components/Button.vue";
import Checkbox from "./components/Checkbox.vue";
import Collapse from "./components/Collapse.vue";
import Dialog from "./components/Dialog.vue";
import Dropdown from "./components/Dropdown.vue";
import Groupbox from "./components/Groupbox.vue";
import Icon from "./components/Icon.vue";
import Link from "./components/Link.vue";
import Listbox from "./components/Listbox.vue";
import Menu from "./components/Menu.vue";
import Menubar from "./components/MenuBar.vue";
import Menuitem from "./components/MenuItem.vue";
import Progress from "./components/Progress.vue";
import Radio from "./components/Radio.vue";
import Searchbox from "./components/Searchbox.vue";
import Slider from "./components/Slider.vue";
import Tabs from "./components/Tabs.vue";
import Textbox from "./components/Textbox.vue";
import Treeview from "./components/Treeview.vue";
import Window from "./components/Window.vue";

const components = {
  WinBalloon: Balloon,
  WinButton: Button,
  WinCheckbox: Checkbox,
  WinCollapse: Collapse,
  WinDialog: Dialog,
  WinDropdown: Dropdown,
  WinGroupbox: Groupbox,
  WinIcon: Icon,
  WinLink: Link,
  WinListbox: Listbox,
  WinMenu: Menu,
  WinMenubar: Menubar,
  WinMenuitem: Menuitem,
  WinProgress: Progress,
  WinRadio: Radio,
  WinSearchbox: Searchbox,
  WinSlider: Slider,
  WinTabs: Tabs,
  WinTextbox: Textbox,
  WinTreeview: Treeview,
  WinWindow: Window,
};

const winVue = {
  install(app) {
    Object.entries(components).forEach(([name, cmp]) => app.component(name, cmp));
  },
};

export {
  Balloon as WinBalloon,
  Button as WinButton,
  Checkbox as WinCheckbox,
  Collapse as WinCollapse,
  Dialog as WinDialog,
  Dropdown as WinDropdown,
  Groupbox as WinGroupbox,
  Icon as WinIcon,
  Link as WinLink,
  Listbox as WinListbox,
  Menu as WinMenu,
  Menubar as WinMenubar,
  Menuitem as WinMenuitem,
  Progress as WinProgress,
  Radio as WinRadio,
  Searchbox as WinSearchbox,
  Slider as WinSlider,
  Tabs as WinTabs,
  Textbox as WinTextbox,
  Treeview as WinTreeview,
  Window as WinWindow,
};

export default winVue;
