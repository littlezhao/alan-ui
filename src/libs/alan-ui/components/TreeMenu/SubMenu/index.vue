<template>
  <div class="sub-menu">
    <div class="title" @click="toggleExpand">
      <slot name="title"></slot>
      <span class="icon" :class="{ 'icon-rotate': isExpand }">&gt;</span>
    </div>
    <div class="sub-item" v-show="isExpand">
      <slot></slot>
    </div>
  </div>
</template>
 
<script>
import { ref } from "@vue/reactivity";
export default {
  name: "SubMenu",
  setup() {
    const isExpand = ref(false);
    const iconFont = ref("&gt;");
    const toggleExpand = () => {
      isExpand.value = !isExpand.value;
    };
    return {
      isExpand,
      toggleExpand,
    };
  },
};
</script>

<style lang="scss" scoped>
.sub-menu {
  .title {
    position: relative;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #ddd;
    cursor: pointer;
    .icon {
      position: absolute;
      right: 15px;
      transition: all 0.2s linear;
    }
    .icon-rotate {
      transform: rotate(90deg);
      transition: all 0.2s linear;
    }
  }
  .sub-item {
    background: #101117;
    transition: all 0.2s linear;
  }
}
</style>