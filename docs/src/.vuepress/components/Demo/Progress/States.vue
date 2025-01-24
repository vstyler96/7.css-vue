<template>
  <div>
    <!-- #region snippet -->
    <win-progress progress="70" />
    <win-progress progress="50" class="paused" />
    <win-progress progress="30" class="error" />
    <win-progress progress="indeterminate" />
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="stylus" scoped>
.winui-progress {
  margin-bottom: 12px;
}
</style>
