<template>
  <WinWindow
    has-space
    active
    color="#AC0048"
  >
    <div class="grid grid-cols-2 gap-3">
      <!-- Default buttons -->
      <Buttons />

      <!-- Links -->
      <Links />
    </div>
  </WinWindow>

  <WinWindow has-space active>
    <!-- Tabs System -->
    <Tabs />
  </WinWindow>

  <WinWindow has-space active>
    <!-- Progressbars -->
    <Progressbars />
  </WinWindow>

  <WinWindow has-space active>
    <div class="grid grid-cols-2 gap-3">
      <!-- Radios -->
      <Radios />

      <!-- Checkboxes -->
      <Checkboxes />
    </div>
  </WinWindow>

  <WinWindow has-space active>
    <div class="grid grid-cols-2 gap-3 py-3">
      <win-balloon
        bottom
        right
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
      />
      <win-balloon
        bottom
        left
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
      />
    </div>
    <div class="grid grid-cols-2 gap-3 py-3">
      <win-balloon
        top
        right
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
      />
      <win-balloon
        top
        left
        caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
      />
    </div>
  </WinWindow>

  <WinWindow has-space active>
    <div class="grid grid-cols-3 gap-3">
      <div>
        <!-- Dropdowns -->
        <Dropdowns />
      </div>

      <!-- TreeView -->
      <win-treeview class="has-collapse-button">
        <win-collapse
          title="Javascript"
          open
          :children="[
            {
              title: 'Avoid at all cost',
              prpendIcon: 'monitor',
              children: [
                { title: 'Avoid' },
                {
                  title: 'At',
                  prependIcon: 'monitor',
                  children: [
                    { title: 'Avoid' },
                    { title: 'At' },
                    { title: 'All' },
                    { title: 'Cost' },
                  ],
                },
                { title: 'All' },
                { title: 'Cost' },
              ],
            }
          ]"
        />
      </win-treeview>
      <!-- <ul>
      <li>Avoid at all costs</li>
      <li>
        <win-collapse
          title="Unless"
          prepend-icon="monitor"
        >
          <ul>
            <li>Avoid</li>
            <li>
              <win-collapse title="At">
                <ul>
                  <li>Avoid</li>
                  <li>At</li>
                  <li>All</li>
                  <li>Cost</li>
                </ul>
              </win-collapse>
            </li>
            <li>All</li>
            <li>Cost</li>
          </ul>
        </win-collapse>
      </li> -->

      <div>
        <win-listbox
          v-model="listboxValue"
          class="has-hover"
          :options="options"
        />
        You selected the option: {{ listboxValue }}
      </div>
    </div>
  </WinWindow>

  <WinWindow has-espace active>
    <div class="grid grid-cols-3 gap-3">
      <div>
        <win-slider
          v-model="sliderValue"
          :max="10"
          :min="1"
        />

        You selected the value: {{ sliderValue }}
      </div>

      <div>
        <win-menu class="can-hover" style="width: 300px">
          <win-menuitem title="View">
            <template #submenu>
              <win-menu>
                <win-menuitem @click="menuRadioOption = 'lg'">
                  <input
                    id="icon-size-lg"
                    type="radio"
                    value="lg"
                    name="icon-size"
                    :checked="menuRadioOption === 'lg'"
                  >
                  <label for="icon-size-lg">
                    Large icons
                  </label>
                </win-menuitem>
                <win-menuitem @click="menuRadioOption = 'md'">
                  <input
                    id="icon-size-md"
                    type="radio"
                    value="md"
                    name="icon-size"
                    :checked="menuRadioOption === 'md'"
                  >
                  <label for="icon-sizemd">
                    Medium icons
                  </label>
                </win-menuitem>
                <win-menuitem @click="menuRadioOption = 'sm'">
                  <input
                    id="icon-size-sm"
                    type="radio"
                    value="sm"
                    name="icon-size"
                    :checked="menuRadioOption === 'sm'"
                  >
                  <label for="icon-size-sm">
                    Small icons
                  </label>
                </win-menuitem>

                <hr>

                <win-menuitem @click="arrangeIcons = !arrangeIcons">
                  <input
                    :model-value="arrangeIcons"
                    type="checkbox"
                    name="arrange-icons"
                    label="Auto arrange icons"
                    :value="arrangeIcons"
                    :checked="arrangeIcons"
                  >
                  <label for="arrange-icons">
                    Auto arrange icons
                  </label>
                </win-menuitem>
              </win-menu>
            </template>
          </win-menuitem>

          <hr>

          <win-menuitem title="Sort by" />
          <win-menuitem title="Refresh" />
          <win-menuitem title="Display" />
        </win-menu>

        <p class="pt-4">
          You have a icons size of: {{ menuRadioOption }}
        </p>
        <p>
          And you have auto arrange icons: {{ arrangeIcons }}
        </p>
      </div>

      <div>
        <win-menubar class="can-hover">
          <win-menuitem title="File">
            <template #submenu>
              <win-menu>
                <win-menuitem
                  title="Open"
                  @click="onOpen"
                />
                <win-menuitem
                  title="Save"
                  @click="onSave"
                />
                <win-menuitem
                  title="Exit"
                  @click="onExit"
                />
              </win-menu>
            </template>
          </win-menuitem>
          <win-menuitem
            title="Edit"
            @click="onEdit"
          />
          <win-menuitem
            title="View"
            @click="onView"
          />
          <win-menuitem
            title="Help"
            @click="onHelp"
          />
        </win-menubar>
      </div>
    </div>
  </WinWindow>
  <!-- <div>

    <win-searchbox placeholder="Search" @search="handleSearch" />
    <win-searchbox placeholder="Search" instant />
  </div> -->
</template>
<script setup>
import { ref } from 'vue';

import Buttons from './Showcase/Buttons.vue';
import Links from './Showcase/Links.vue';
import Tabs from './Showcase/Tabs.vue';
import Progressbars from './Showcase/Progressbars.vue';
import Radios from './Showcase/Radios.vue';
import Checkboxes from './Showcase/Checkboxes.vue';
import Dropdowns from './Showcase/Dropdowns.vue';

const listboxValue = ref("good");
const sliderValue = ref(4);
const menuRadioOption = ref('lg');
const arrangeIcons = ref(false);

const options = [
  { name: "5 - Incredible!", id: "incredible" },
  { name: "4 - Great!", id: "great" },
  { name: "3 - Pretty good!", id: "good" },
  { name: "2 - Not so great!", id: "not so" },
  { name: "1 - Unfortunate!", id: "ew" },
];

function onOpen() {
  console.log('Open');
}
function onSave() {
  console.log('Save');
}
function onExit() {
  console.log('Exit');
}
function onEdit() {
  console.log('Edit');
}
function onView() {
  console.log('View');
}
function onHelp() {
  console.log('Help');
}

// export default {
//   data() {
//     return {
//       options: [
//         { name: "5 - Incredible!", id: "incredible" },
//         { name: "4 - Great!", id: "great" },
//         { name: "3 - Pretty good!", id: "good" },
//         { name: "2 - Not so great!", id: "not so" },
//         { name: "1 - Unfortunate!", id: "ew" },
//       ],
//       listboxValue: "good",
//       dropdownValue: "great",
//       sliderValue: 4,
//       isChecked: true,
//       arrangeIcons: false,
//       menuOption: (size) => ({
//         as: "radio",
//         id: "icon-size-" + size,
//         name: "icon-size",
//         nativeValue: size,
//       }),
//       menuOptionValue: "md",
//     };
//   },
//   watch: {
//     menuOptionValue(value) {
//       console.log(value);
//     },
//     sliderValue(value) {
//       console.log(value);
//     },
//   },
//   methods: {
//     handleSearch(value) {
//       console.log(value);
//     },
//   },
// };
</script>
