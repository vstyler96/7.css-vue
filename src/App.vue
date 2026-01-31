<script setup lang="ts">
import { ref } from "vue";
import {
  Balloon,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  Dropdown,
  Groupbox,
  Icon,
  Link,
  Listbox,
  Menu,
  MenuBar,
  MenuItem,
  Navbar,
  NavbarItem,
  Progress,
  Radio,
  Searchbox,
  Slider,
  Tabs,
  Textbox,
  Treeview,
  Window,
} from "../lib/components";

// State for interactive components
const checkboxValue = ref(false);
const checkboxArrayValue = ref<string[]>([]);
const radioValue = ref("option1");
const dropdownValue = ref<string | undefined>(undefined);
const listboxValue = ref(1);
const sliderValue = ref(50);
const textboxValue = ref("Hello World");
const textareaValue = ref("This is a textarea");
const searchValue = ref("");
const dialogOpen = ref(false);
const collapseOpen = ref(false);
const activeTab = ref("tab1");
const progressValue = ref(65);

// Sample data
const dropdownOptions = [
  { id: "apple", name: "Apple" },
  { id: "banana", name: "Banana" },
  { id: "cherry", name: "Cherry" },
  { id: "date", name: "Date" },
];

const listboxOptions = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
  { id: 3, name: "Item Three" },
  { id: 4, name: "Item Four" },
];

const tabsList = {
  tab1: "General",
  tab2: "Advanced",
  tab3: "About",
};

const navItems = [
  { text: "Home", href: "#", active: true },
  { text: "Products", href: "#" },
  { text: "Services", href: "#" },
  { text: "Contact", href: "#" },
];

const collapseChildren = [
  { id: 1, title: "Sub Item 1" },
  { id: 2, title: "Sub Item 2" },
  { id: 3, title: "Sub Item 3" },
];

// Menu checkbox/radio state
const menuIconSize = ref("md");
const menuAutoArrange = ref(false);
const menuAlignGrid = ref(true);

// Helper functions for menu options
const radioOption = (size: string) => ({
  as: "radio" as const,
  id: `icon-size-${size}`,
  name: "icon-size",
  nativeValue: size,
});

const checkOption = (id: string) => ({
  as: "checkbox" as const,
  id: `${id}-option`,
});

function onSearch(value: string) {
  searchValue.value = value;
  console.log("Search:", value);
}
</script>

<template>
  <div class="showcase">
    <header class="showcase-header">
      <h1>7.css Vue Components</h1>
      <p>A showcase of all available components</p>
    </header>

    <Window
      title="Component Showcase"
      active
      has-scrollbar
      closable
    >
      <!-- Navbar -->
      <fieldset class="component-section">
        <legend>Navbar</legend>
        <Navbar>
          <NavbarItem
            v-for="item in navItems"
            :key="item.text"
            :href="item.href"
            :active="item.active"
          >
            {{ item.text }}
          </NavbarItem>
        </Navbar>
      </fieldset>

      <!-- Button -->
      <fieldset class="component-section">
        <legend>Button</legend>
        <div class="component-row">
          <Button text="Default Button" />
          <Button text="Link Button" href="#" />
          <Button @click="dialogOpen = true">Open Dialog</Button>
        </div>
      </fieldset>

      <!-- Dialog -->
      <fieldset class="component-section">
        <legend>Dialog</legend>
        <Button @click="dialogOpen = true">Show Dialog</Button>
        <Dialog
          v-model="dialogOpen"
          title="Sample Dialog"
          message="This is a sample dialog with a message."
          draggable
          @accept="console.log('Accepted')"
          @cancel="console.log('Cancelled')"
        />
      </fieldset>

      <!-- Window -->
      <fieldset class="component-section">
        <legend>Window</legend>
        <div class="windows-container">
          <div>
            <Window title="Basic Window" active>
              <p>This is a basic window component.</p>
            </Window>
          </div>

          <Window
            title="Window with Controls"
            width="300px"
            minimizable
            maximizable
            closable
            :has-status="true"
            :status-fields="['Ready', 'Items: 5']"
          >
            <p>This window has minimize, maximize, and close buttons.</p>
          </Window>
        </div>
      </fieldset>

      <!-- Textbox -->
      <fieldset class="component-section">
        <legend>Textbox</legend>
        <Groupbox title="Input Fields">
          <div class="form-group">
            <label>Text Input:</label>
            <Textbox v-model="textboxValue" placeholder="Enter text..." />
          </div>
          <div class="form-group">
            <label>Textarea:</label>
            <Textbox v-model="textareaValue" type="textarea" />
          </div>
          <div class="form-group">
            <label>Readonly:</label>
            <Textbox v-model="textboxValue" readonly />
          </div>
        </Groupbox>
      </fieldset>

      <!-- Checkbox -->
      <fieldset class="component-section">
        <legend>Checkbox</legend>
        <Groupbox title="Checkbox Options">
          <Checkbox
            v-model="checkboxValue"
            name="single-checkbox"
            label="Single Checkbox"
          />
          <p>Value: {{ checkboxValue }}</p>

          <hr />

          <Checkbox
            v-model="checkboxArrayValue"
            name="option-a"
            label="Option A"
            value="a"
          />
          <Checkbox
            v-model="checkboxArrayValue"
            name="option-b"
            label="Option B"
            value="b"
          />
          <Checkbox
            v-model="checkboxArrayValue"
            name="option-c"
            label="Option C"
            value="c"
          />
          <p>Selected: {{ checkboxArrayValue.join(", ") || "None" }}</p>
        </Groupbox>
      </fieldset>

      <!-- Radio -->
      <fieldset class="component-section">
        <legend>Radio</legend>
        <Groupbox title="Radio Options">
          <Radio
            v-model="radioValue"
            name="radio-group"
            value="option1"
            label="Option 1"
          />
          <Radio
            v-model="radioValue"
            name="radio-group"
            value="option2"
            label="Option 2"
          />
          <Radio
            v-model="radioValue"
            name="radio-group"
            value="option3"
            label="Option 3"
          />
          <p>Selected: {{ radioValue }}</p>
        </Groupbox>
      </fieldset>

      <!-- Dropdown -->
      <fieldset class="component-section">
        <legend>Dropdown</legend>
        <Dropdown
          v-model="dropdownValue"
          :options="dropdownOptions"
          placeholder="Select a fruit..."
        />
        <p>Selected: {{ dropdownValue ?? "None" }}</p>
      </fieldset>

      <!-- Listbox -->
      <fieldset class="component-section">
        <legend>Listbox</legend>
        <Listbox v-model="listboxValue" :options="listboxOptions" />
        <p>Selected ID: {{ listboxValue }}</p>
      </fieldset>

      <!-- Slider -->
      <fieldset class="component-section">
        <legend>Slider</legend>
        <Slider v-model="sliderValue" min="0" max="100" />
        <p>Value: {{ sliderValue }}</p>
      </fieldset>

      <!-- Progress -->
      <fieldset class="component-section">
        <legend>Progress</legend>
        <div class="progress-demos">
          <div>
            <label>Determinate ({{ progressValue }}%):</label>
            <Progress :progress="progressValue" />
          </div>
          <div>
            <label>Indeterminate:</label>
            <Progress indeterminate />
          </div>
        </div>
      </fieldset>

      <!-- Searchbox -->
      <fieldset class="component-section">
        <legend>Searchbox</legend>
        <div class="component-row">
          <Searchbox placeholder="Search..." @search="onSearch" />
          <Searchbox instant placeholder="Instant search..." />
        </div>
        <p v-if="searchValue">Last search: {{ searchValue }}</p>
      </fieldset>

      <!-- Tabs -->
      <fieldset class="component-section">
        <legend>Tabs</legend>
        <Tabs v-model="activeTab" :tabs="tabsList">
          <template #tab1>
            <p>This is the General tab content.</p>
          </template>
          <template #tab2>
            <p>This is the Advanced tab content with more options.</p>
          </template>
          <template #tab3>
            <p>About this application. Version 1.0.0</p>
          </template>
        </Tabs>
      </fieldset>

      <!-- Collapse -->
      <fieldset class="component-section">
        <legend>Collapse</legend>
        <Collapse
          v-model:open="collapseOpen"
          title="Click to expand"
          :children="collapseChildren"
        />
        <Collapse title="Another section">
          <p>Custom content inside the collapse.</p>
        </Collapse>
      </fieldset>

      <!-- Groupbox -->
      <fieldset class="component-section">
        <legend>Groupbox</legend>
        <Groupbox title="Settings">
          <p>This content is wrapped in a groupbox (fieldset).</p>
          <Button text="Save Settings" />
        </Groupbox>
      </fieldset>

      <!-- Link -->
      <fieldset class="component-section">
        <legend>Link</legend>
        <div class="component-row">
          <Link href="#" text="Regular Link" />
          <Link text="Button Link" />
          <Link
            href="https://github.com"
            target="_blank"
            text="External Link"
          />
        </div>
      </fieldset>

      <!-- Icon -->
      <fieldset class="component-section">
        <legend>Icon</legend>
        <div class="component-row">
          <Icon icon="monitor" size="24" />
          <Icon icon="monitor" size="32" />
          <Icon icon="monitor" size="48" />
        </div>
      </fieldset>

      <!-- Balloon (Tooltip) -->
      <fieldset class="component-section">
        <legend>Balloon (Tooltip)</legend>
        <div class="balloon-demos">
          <Balloon caption="Top tooltip" top />
          <Balloon caption="Bottom tooltip" bottom />
          <Balloon caption="Left tooltip" left />
          <Balloon caption="Right tooltip" right />
        </div>
      </fieldset>

    <!-- Menu & MenuBar -->
    <fieldset class="component-section">
<legend>Menu & MenuBar</legend>
      <p>MenuBar with dropdown menus (hover to open):</p>
      <MenuBar can-hover>
        <MenuItem>File
          <Menu>
            <MenuItem><button>New</button></MenuItem>
            <MenuItem><button>Open</button></MenuItem>
            <MenuItem><button>Save</button></MenuItem>
            <hr />
            <MenuItem><button>Exit</button></MenuItem>
          </Menu>
        </MenuItem>
        <MenuItem>Edit
          <Menu>
            <MenuItem><button>Undo</button></MenuItem>
            <MenuItem><button>Redo</button></MenuItem>
            <hr />
            <MenuItem><button>Cut</button></MenuItem>
            <MenuItem><button>Copy</button></MenuItem>
            <MenuItem><button>Paste</button></MenuItem>
          </Menu>
        </MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Help
          <Menu>
            <MenuItem><button>About</button></MenuItem>
          </Menu>
        </MenuItem>
      </MenuBar>

      <p style="margin-top: 16px;">Standalone Menu:</p>
      <Menu can-hover class="demo-menu">
        <MenuItem><button>Option 1</button></MenuItem>
        <MenuItem><button>Option 2</button></MenuItem>
        <MenuItem>Option 3 (with submenu)
          <Menu>
            <MenuItem><button>Sub Option 3.1</button></MenuItem>
            <MenuItem><button>Sub Option 3.2</button></MenuItem>
          </Menu>
        </MenuItem>
        <hr />
        <MenuItem><button>Option 4</button></MenuItem>
      </Menu>

      <p style="margin-top: 16px;">Menu with Checkbox/Radio options:</p>
      <Menu class="demo-menu">
        <MenuItem :option="radioOption('lg')" v-model="menuIconSize">Large icons</MenuItem>
        <MenuItem :option="radioOption('md')" v-model="menuIconSize">Medium icons</MenuItem>
        <MenuItem :option="radioOption('sm')" v-model="menuIconSize">Small icons</MenuItem>
        <hr />
        <MenuItem :option="checkOption('arrange')" v-model="menuAutoArrange">Auto arrange icons</MenuItem>
        <MenuItem :option="checkOption('align')" v-model="menuAlignGrid">Align icons to grid</MenuItem>
      </Menu>
      <p>Icon size: {{ menuIconSize }} | Auto arrange: {{ menuAutoArrange }} | Align grid: {{ menuAlignGrid }}</p>
      </fieldset>

      <!-- Treeview -->
      <fieldset class="component-section">
        <legend>Treeview</legend>
        <Treeview>
          <li>
            <details open>
              <summary>Documents</summary>
              <ul>
                <li>Work Files</li>
                <li>Personal</li>
                <li>
                  <details>
                    <summary>Projects</summary>
                    <ul>
                      <li>Project A</li>
                      <li>Project B</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pictures</summary>
              <ul>
                <li>Vacation</li>
                <li>Family</li>
              </ul>
            </details>
          </li>
          <li>Downloads</li>
        </Treeview>
      </fieldset>
    </Window>
  </div>
</template>

<style scoped>
.showcase {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.showcase-header {
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.showcase-header h1 {
  margin-bottom: 10px;
}

.showcase-header p {
  opacity: 0.9;
}

.component-section {
  margin-bottom: 16px;
}

.component-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.windows-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.form-group {
  margin-bottom: 12px;
}

.form-group > label {
  display: block;
  margin-bottom: 4px;
}

.progress-demos {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.progress-demos > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.balloon-demos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 40px 20px;
}

.component-section hr {
  margin: 16px 0;
}

.component-section p {
  margin: 8px 0;
}

.demo-menu {
  width: 200px;
}
</style>
