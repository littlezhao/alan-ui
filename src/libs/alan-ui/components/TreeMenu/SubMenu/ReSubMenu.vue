<template>
  <sub-menu>
    <template #title>{{ data.title }}</template>
    <template v-for="item of data.children">
      <menu-item v-if="!item.children" :key="item.id">
        <a> {{ item.title }}</a>
      </menu-item>
      <re-sub-menu v-else :key="item.id" :data="item" />
    </template>
  </sub-menu>
</template>

<script>
export default {
  name: "ReSubMenu",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>