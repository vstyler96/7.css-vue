<template>
  <div>
    <win-textbox type="password" placeholder="Password" required />
    <win-textbox type="email" placeholder="Email" />
    <win-textbox type="number" placeholder="Number" />
    <win-textbox type="textarea" value="Textarea" rows="5" />
  </div>
</template>

<style lang="stylus" scoped>
.winui-textbox {
  display: block;
  margin-bottom: 8px;
  min-width: 300px;
}
</style>
