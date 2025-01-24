<template>
  <win-menu class="can-hover">
    <win-menuitem><button>Option 1</button></win-menuitem>
    <win-menuitem><button>Option 2</button></win-menuitem>
    <win-menuitem>
      Option 3
      <win-menu>
        <win-menuitem><button>Option 3.1</button></win-menuitem>
        <win-menuitem><button>Option 3.2</button></win-menuitem>
        <win-menuitem><button>Option 3.3</button></win-menuitem>
        <win-menuitem><button>Option 3.4</button></win-menuitem>
      </win-menu>
    </win-menuitem>
    <hr />
    <win-menuitem><button>Option 4</button></win-menuitem>
    <win-menuitem><button>Option 5</button></win-menuitem>
    <hr />
    <win-menuitem>
      Option 6
      <win-menu>
        <win-menuitem>
          Option 6.1
          <win-menu>
            <win-menuitem><button>Option 6.1.1</button></win-menuitem>
            <win-menuitem><button>Option 6.1.2</button></win-menuitem>
            <hr />
            <win-menuitem><button>Option 6.1.3</button></win-menuitem>
            <win-menuitem><button>Option 6.1.4</button></win-menuitem>
          </win-menu>
        </win-menuitem>
        <win-menuitem><button>Option 6.2</button></win-menuitem>
        <win-menuitem><button>Option 6.3</button></win-menuitem>
      </win-menu>
    </win-menuitem>
  </win-menu>
</template>

<style lang="stylus" scoped>
.winui-menu {
  width: 250px;
}
</style>
