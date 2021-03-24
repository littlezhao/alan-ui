<template>
  <div class="selector-menu">
    <template v-if="filterData.length > 0">
      <div
        class="menu-item"
        v-for="(item, index) in filterData"
        :key="index"
        @click="setItemValue(item)"
      >
        {{ item.text }}
      </div>
    </template>
    <no-data-tip v-else />
  </div>
</template>

<script>
import NoDataTip from "./NoDataTip.vue";
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
export default {
  name: "SelectorMenu",
  components: {
    NoDataTip,
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: [
        {
          id: 1,
          text: "option1",
        },
        {
          id: 2,
          text: "option2",
        },
        {
          id: 3,
          text: "option3",
        },
      ],
    },
    searchValue: String,
  },
  setup(props, { emit }) {
    const filterData = ref([]);
    const setItemValue = (item) => {
      emit("setItemValue", item);
    };
    onMounted(() => {
      filterData.value = props.data;
    });
    watch(
      () => props.searchValue,
      (value) => {
        filter(value);
      }
    );
    const filter = (value) => {
      filterData.value = props.data.filter((item) => {
        return item.text.toLowerCase().includes(props.searchValue);
      });
    };
    return {
      setItemValue,
      filterData,
    };
  },
};
</script>

<style lang="scss" scoped>
.selector-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 35px;
  width: 100%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  .menu-item {
    height: 35px;
    text-align: center;
    font-size: 14px;
    line-height: 35px;
    color: #666;
    margin: 10px 0;
    transition: all 0.2s linear;
    &:hover {
      background-color: #ededed;
    }
  }
}
</style>