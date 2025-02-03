<template>
  <WinWindow
    has-space
    active
    color="#AC0048"
  >
    <!-- Default buttons -->
    <Buttons />

    <!-- Links -->
    <Links />
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
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <!-- Radios -->
          <Radios />
        </div>

        <div class="col-12 col-md-6">
          <!-- Checkboxes -->
          <Checkboxes />
        </div>
      </div>
    </div>
  </WinWindow>

  <WinWindow has-space active>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <win-balloon
            bottom
            right
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
          />
        </div>
        <div class="col-12 col-md-6">
          <win-balloon
            bottom
            left
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <win-balloon
            top
            right
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
          />
        </div>
        <div class="col-12 col-md-6">
          <win-balloon
            top
            left
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam"
          />
        </div>
      </div>
    </div>
  </WinWindow>
  <!-- <div>
    <win-dropdown
      v-model="dropdownValue"
      :options="options"
    />
    <win-treeview class="has-collapse-button">
      <win-collapse
        title="Javascript"
      >
        <ul>
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
          </li>
        </ul>
      </win-collapse>
    </win-treeview>

    <win-listbox
      v-model="listboxValue"
      class="has-hover"
      :options="options"
    />
    <win-slider
      v-model="sliderValue"
      max="10"
      min="1"
    />
    <win-menubar class="can-hover">
      <win-menuitem title="File">
        <template #submenu>
          <win-menu>
            <win-menuitem title="Open" />
            <win-menuitem title="Save" />
            <win-menuitem title="Exit" />
          </win-menu>
        </template>
      </win-menuitem>
      <win-menuitem title="Edit" />
      <win-menuitem title="View" />
      <win-menuitem title="Help" />
    </win-menubar>
    <win-menu class="can-hover" style="width: 300px">
      <win-menuitem label="View">
        <template #submenu>
          <win-menu>
            <win-menuitem>
              <input
                v-model="menuOptionValue"
                id="icons-size-lg"
                type="radio"
                name="icon-size"
                value="lg"
              />
              <label for="icons-size-lg">
                Large icons
              </label>
            </win-menuitem>
            <win-menuitem>
              <input
                v-model="menuOptionValue"
                id="icons-size-md"
                type="radio"
                name="icon-size"
                value="md"
              />
              <label for="icons-size-md">
                Medium icons
              </label>
            </win-menuitem>
            <win-menuitem>
              <input
                v-model="menuOptionValue"
                id="icons-size-sm"
                type="radio"
                name="icon-size"
                value="sm"
              />
              <label for="icons-size-sm">
                Small icons
              </label>
            </win-menuitem>
            <hr />
            <win-menuitem>
              <input
                v-model="arrangeIcons"
                id="arrange-icons"
                type="checkbox"
                name="arrange-icons"
              />
              <label for="arrange-icons">
                Auto arrange icons
              </label>
            </win-menuitem>
          </win-menu>
        </template>
      </win-menuitem>
      <hr />
      <win-menuitem label="Sort by" />
      <win-menuitem label="Refresh" />
      <win-menuitem label="Display" />
    </win-menu>
    <win-searchbox placeholder="Search" @search="handleSearch" />
    <win-searchbox placeholder="Search" instant />
  </div> -->
</template>
<script setup>
import Buttons from './Showcase/Buttons.vue';
import Links from './Showcase/Links.vue';
import Tabs from './Showcase/Tabs.vue';
import Progressbars from './Showcase/Progressbars.vue';
import Radios from './Showcase/Radios.vue';
import Checkboxes from './Showcase/Checkboxes.vue';

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
