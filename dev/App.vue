<template>
  <div>
    <win-button class="default">default button</win-button>
    <win-button>Click me</win-button>
    <win-link text="link" icon="monitor" />
    <win-link text="button" @click="handleLinkClick" />
    <win-tabs :tabs="tabs">
      <template #apps> apps </template>
      <template #games> games </template>
      <template #softs> softs </template>
    </win-tabs>
    <win-progress progress="50%" class="error" />
    <win-groupbox
      label="Radio buttons"
    >
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
      class="has-hover"
      :items="options"
      v-model="listboxValue"
    />
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
        { name: "5 - Incredible!", id: "incredible" },
        { name: "4 - Great!", id: "great" },
        { name: "3 - Pretty good!", id: "good" },
        { name: "2 - Not so great!", id: "not so" },
        { name: "1 - Unfortunate!", id: "ew" },
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
