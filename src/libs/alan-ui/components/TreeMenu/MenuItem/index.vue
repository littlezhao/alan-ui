<template>
  <div class="menu-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
};
</script>

<style lang="scss" >
.menu-item {
  height: 48px;
  line-height: 48px;
  color: #ddd;
  text-align: center;
  a {
    text-align: center;
    color: #ddd;
    display: inline-block;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
}
</style>