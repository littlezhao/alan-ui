<template>
  <div class="container">
    <Selector placeholder="请选择选项..." @getItem="getItem" :data="data" />
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const data = [{ id: 1, text: "选项1" }];
    const getItem = (item) => {
      console.log(item.id, item.text);
    };
    return {
      getItem,
      data,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 500px;
  margin: 200px auto;
}
</style>