<template>
  <win-menu>
    <win-menuitem :option="radio('lg')" v-model="radioSelected">
      Large icons
    </win-menuitem>
    <win-menuitem :option="radio('md')" v-model="radioSelected">
      Medium icons
    </win-menuitem>
    <win-menuitem :option="radio('sm')" v-model="radioSelected">
      Small icons
    </win-menuitem>
    <hr />
    <win-menuitem :option="check('arrange')">
      Auto arrange icons
    </win-menuitem>
    <win-menuitem :option="check('align')" value="true">
      Align icons to grid
    </win-menuitem>
  </win-menu>
</template>

<script>
export default {
  data() {
    return {
      check: (id) => ({ as: "checkbox", id: id + "-icons" }),
      radio: (size) => ({
        as: "radio",
        id: "icon-size-" + size,
        name: "icon-size",
        nativeValue: size,
      }),
      radioSelected: "md",
    };
  },
};
</script>

<style lang="stylus" scoped>
.winui-menu {
  width: 200px;
}
</style>
