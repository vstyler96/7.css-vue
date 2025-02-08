<template>
  <div class="grid grid-cols-2 gap-3">
    <win-groupbox title="Success">
      <win-progress
        progress="25%"
        variant="success"
      />

      <win-progress
        progress="50%"
        variant="success"
      />

      <win-progress
        progress="75%"
        variant="success"
      />

      <win-progress
        progress="90%"
        variant="success"
        inert
      />
    </win-groupbox>
    <win-groupbox title="Classic">
      <win-progress
        progress="25%"
        variant="classic"
        inert
      />

      <win-progress
        progress="50%"
        variant="classic"
        inert
      />

      <win-progress
        progress="75%"
        variant="classic"
        inert
      />

      <win-progress
        progress="90%"
        variant="classic"
        inert
      />
    </win-groupbox>
  </div>
  <div class="grid grid-cols-2 gap-3">
    <win-groupbox title="Paused">
      <win-progress
        progress="25%"
        variant="paused"
      />

      <win-progress
        progress="50%"
        variant="paused"
      />

      <win-progress
        progress="75%"
        variant="paused"
      />

      <win-progress
        progress="90%"
        variant="paused"
        inert
      />

      <win-progress
        progress="50%"
        variant="paused"
      />
    </win-groupbox>
    <win-groupbox title="Error">
      <win-progress
        progress="25%"
        variant="error"
      />

      <win-progress
        progress="50%"
        variant="error"
      />

      <win-progress
        progress="75%"
        variant="error"
      />

      <win-progress
        progress="90%"
        variant="error"
        inert
      />
    </win-groupbox>
  </div>
</template>
