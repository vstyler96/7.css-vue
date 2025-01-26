import Balloon from "./components/Balloon.vue";
import Button from "./components/Button.vue";
import Checkbox from "./components/Checkbox.vue";
import Collapse from "./components/Collapse.vue";
import Dropdown from "./components/Dropdown.vue";
import Groupbox from "./components/Groupbox.vue";
import Icon from "./components/Icon.vue";
import Link from "./components/Link.vue";
import Listbox from "./components/Listbox.vue";
import Menu from "./components/Menu.vue";
import MenuBar from "./components/MenuBar.vue";
import MenuItem from "./components/MenuItem.vue";
import Progress from "./components/Progress.vue";
import Radio from "./components/Radio.vue";
import Searchbox from "./components/Searchbox.vue";
import Slider from "./components/Slider.vue";
import Tabs from "./components/Tabs.vue";
import Textbox from "./components/Textbox.vue";
import Treeview from "./components/Treeview.vue";

const components = {
  WinBalloon: Balloon,
  WinButton: Button,
  WinCheckbox: Checkbox,
  WinCollapse: Collapse,
  WinDropdown: Dropdown,
  WinGroupbox: Groupbox,
  WinIcon: Icon,
  WinLink: Link,
  WinListbox: Listbox,
  WinMenu: Menu,
  WinMenuBar: MenuBar,
  WinMenuItem: MenuItem,
  WinProgress: Progress,
  WinRadio: Radio,
  WinSearchbox: Searchbox,
  WinSlider: Slider,
  WinTabs: Tabs,
  WinTextbox: Textbox,
  WinTreeview: Treeview,
};

const winVue = {
  install(app) {
    Object.entries(components).forEach(([name, cmp]) => app.component(name, cmp));
  },
};


export default winVue;
