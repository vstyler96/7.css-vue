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
  <!-- <div>
    <win-groupbox label="Progress bars">
      <win-progress
        progress="50%"
        class="success"
        animate
      />
      <win-progress
        progress="50%"
        class="paused"
      />
      <win-progress
        progress="50%"
        class="error"
        animate
      />
      <win-progress
        progress="50%"
        class="classic"
      />
      <win-progress
        progress="indeterminate"
      />
    </win-groupbox>

    <win-groupbox label="Radio buttons">
      <win-radio
        id="theme-light"
        value="light"
        name="theme"
        label="Light"
        checked
      />
      <win-radio
        id="theme-dark"
        value="dark"
        name="theme"
        label="Dark"
      />
      <win-radio
        id="theme-auto"
        value="auto"
        name="theme"
        label="Auto"
        disabled
      />
    </win-groupbox>

    <win-checkbox
      id="check1"
      v-model="isChecked"
      name="check"
      label="I am checked"
    />
    <win-checkbox
      id="check2"
      name="check"
      label="I am free"
    />
    <win-checkbox
      id="check3"
      name="check"
      disabled
      label="I am disabled"
    />
    <win-balloon>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    </win-balloon>
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
      <win-menuitem>
        File
        <win-menu>
          <win-menuitem>
            <button>
              Open
            </button>
          </win-menuitem>
          <win-menuitem>
            <button>
              Save
            </button>
          </win-menuitem>
          <win-menuitem>
            <button>
              Exit
            </button>
          </win-menuitem>
        </win-menu>
      </win-menuitem>
      <win-menuitem>
        Edit
      </win-menuitem>
      <win-menuitem>
        View
      </win-menuitem>
      <win-menuitem>
        Help
      </win-menuitem>
    </win-menubar>
    <win-menu class="can-hover" style="width: 300px">
      <win-menuitem label="View">
        <template #menu>
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
