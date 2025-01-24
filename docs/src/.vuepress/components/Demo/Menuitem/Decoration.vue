<template>
  <win-menubar class="can-hover">
    <win-menuitem>
      File
      <win-menu>
        <win-menuitem>
          <img
            src="https://img.icons8.com/color/18/opened-folder.png"
            alt="open"
          />
          <button>
            Open...
            <span>Ctrl+O</span>
          </button>
        </win-menuitem>
        <win-menuitem><button>Open Recent</button></win-menuitem>
        <hr />
        <win-menuitem>
          <img src="https://img.icons8.com/color/18/save.png" alt="save" />
          <button>
            Save
            <span>Ctrl+S</span>
          </button>
        </win-menuitem>
        <win-menuitem>
          <img
            src="https://img.icons8.com/color/18/save-as.png"
            alt="save as"
          />
          <button>
            Save As...
            <span>Ctrl+Shift+S</span>
          </button>
        </win-menuitem>
        <hr />
        <win-menuitem><button>Exit</button></win-menuitem>
      </win-menu>
    </win-menuitem>
    <win-menuitem>Edit</win-menuitem>
    <win-menuitem>View</win-menuitem>
    <win-menuitem>Run</win-menuitem>
    <win-menuitem>Help</win-menuitem>
  </win-menubar>
</template>
