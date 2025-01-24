<template>
  <div>
    <win-button class="default">default button</win-button>
    <win-button>Click me</win-button>
    <win-link text="link" icon="https://abs.twimg.com/favicons/twitter.ico" />
    <win-link text="button" @click="handleLinkClick" />
    <win-tabs :tabs="tabs">
      <template #apps> apps </template>
      <template #games> games </template>
      <template #softs> softs </template>
    </win-tabs>
    <win-progress progress="50%" class="error" />
    <win-groupbox label="Radio buttons">
      <win-radio id="theme-light" value="light" name="theme" checked>
        Light
      </win-radio>
      <win-radio id="theme-dark" value="dark" name="theme">Dark</win-radio>
      <win-radio id="theme-auto" value="auto" name="theme" disabled>
        Auto
      </win-radio>
    </win-groupbox>
    <win-checkbox id="check1" name="check" v-model="isChecked">
      I am checked
    </win-checkbox>
    <win-checkbox id="check2" name="check">I am free</win-checkbox>
    <win-checkbox id="check3" name="check" disabled>
      I am disabled
    </win-checkbox>
    <win-balloon> ABC </win-balloon>
    <win-dropdown :options="options" v-model="dropdownValue" />
    <win-treeview class="has-collapse-button">
      <win-collapse open title="Javascript">
        <ul>
          <li>Avoid at all costs</li>
          <li>
            <win-collapse>
              <template #title>
                <span class="collapse-title">
                  <win-icon
                    src="https://img.icons8.com/color/16/000000/monitor--v1.png"
                    size="16"
                  />
                  Unless
                </span>
              </template>
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
      class="has-hover"
      :items="options"
      v-model="listboxValue"
    ></win-listbox>
    <win-slider max="10" min="1" v-model="sliderValue" />
    <win-menubar class="can-hover">
      <win-menuitem>
        File
        <win-menu>
          <win-menuitem><button>Open</button></win-menuitem>
          <win-menuitem><button>Save</button></win-menuitem>
          <win-menuitem><button>Exit</button></win-menuitem>
        </win-menu>
      </win-menuitem>
      <win-menuitem>Edit</win-menuitem>
      <win-menuitem>View</win-menuitem>
      <win-menuitem>Help</win-menuitem>
    </win-menubar>
    <win-menu class="can-hover" style="width: 300px">
      <win-menuitem>
        View
        <win-menu>
          <win-menuitem :option="menuOption('lg')" v-model="menuOptionValue"
            >Large icons</win-menuitem
          >
          <win-menuitem :option="menuOption('md')" v-model="menuOptionValue"
            >Medium icons</win-menuitem
          >
          <win-menuitem :option="menuOption('sm')" v-model="menuOptionValue"
            >Small icons</win-menuitem
          >
          <hr />
          <win-menuitem :option="{ as: 'checkbox', id: 'arrange-icons' }"
            >Auto arrange icons</win-menuitem
          >
        </win-menu>
      </win-menuitem>
      <hr />
      <win-menuitem><button>Sort by</button></win-menuitem>
      <win-menuitem><button>Refresh</button></win-menuitem>
      <win-menuitem><button>Display</button></win-menuitem>
    </win-menu>
    <win-searchbox placeholder="Search" @search="handleSearch" />
    <win-searchbox placeholder="Search" instant />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: {
        apps: "Apps",
        games: "Games",
        softs: "Software",
      },
      options: [
        { label: "5 - Incredible!", value: "incredible" },
        { label: "4 - Great!", value: "great" },
        { label: "3 - Pretty good!", value: "good" },
        { label: "2 - Not so great!", value: "not so" },
        { label: "1 - Unfortunate!", value: "ew" },
      ],
      listboxValue: "good",
      dropdownValue: "great",
      sliderValue: 4,
      isChecked: true,
      menuOption: (size) => ({
        as: "radio",
        id: "icon-size-" + size,
        name: "icon-size",
        nativeValue: size,
      }),
      menuOptionValue: "md",
    };
  },
  watch: {
    menuOptionValue(value) {
      console.log(value);
    },
    sliderValue(value) {
      console.log(value);
    },
  },
  methods: {
    handleLinkClick() {
      alert("ok");
    },
    handleSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.collapse-title img {
  display: inline-block;
  vertical-align: bottom;
}
</style>
