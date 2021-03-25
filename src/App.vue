<template>
  <div class="container">
    <Selector placeholder="请选择选项..." @getItem="getItem" :data="data" />
  </div>
  <div class="menu-container">
    <tree-menu>
      <template v-for="item in menuData">
        <menu-item v-if="!item.children" :key="item.id">
          <a>
            {{ item.title }}
          </a>
        </menu-item>
        <re-sub-menu :data="item" v-else :key="item.id" />
      </template>
    </tree-menu>
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const data = [{ id: 1, text: "选项1" }];
    const menuData = [
      { id: 1, title: "菜单1" },
      {
        id: 2,
        title: "菜单2",
        children: [
          {
            id: 21,
            title: "菜单2-1",
            children: [
              {
                id: 211,
                title: "菜单2-1-1",
              },
            ],
          },
        ],
      },
      { id: 3, title: "菜单3" },
    ];
    const getItem = (item) => {
      console.log(item.id, item.text);
    };
    return {
      getItem,
      data,
      menuData,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 500px;
  margin: 100px auto;
}
.menu-container {
  width: 220px;
}
</style>