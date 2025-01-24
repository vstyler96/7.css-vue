<template>
  <win-treeview class="has-connector has-collapse-button">
    <li>
      Root Node
      <ul>
        <li>
          <win-collapse title="Node 1" open>
            <ul>
              <li>Node 1.1</li>
              <li>Node 1.2</li>
            </ul>
          </win-collapse>
        </li>
        <li>Node 2</li>
      </ul>
    </li>
  </win-treeview>
</template>
