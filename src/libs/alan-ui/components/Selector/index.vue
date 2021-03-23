<template>
  <div class="selector" v-focus>
    <selector-input
      :placeholder="placeholder"
      :inputValue="state.inputValue"
      @search="search"
    />
    <selector-menu
      @setItemValue="setItemValue"
      :data="data"
      :searchValue="state.searchValue"
    />
  </div>
</template>
<script>
import SelectorInput from "./Input.vue";
import SelectorMenu from "./Menu.vue";
import focus from "../../directives/focus.js";
import { reactive } from "@vue/reactivity";
export default {
  name: "Selector",
  components: {
    SelectorInput,
    SelectorMenu,
  },
  props: {
    placeholder: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
  directives: {
    focus,
  },
  setup(props, { emit }) {
    const state = reactive({
      inputValue: "",
      searchValue: "",
    });
    const setItemValue = (item) => {
      state.inputValue = item.text;
      emit("getItem", item);
    };
    const search = (value) => {
      state.searchValue = value;
    };
    return {
      setItemValue,
      state,
      search,
    };
  },
};
</script>

<style lang="scss">
.selector {
  width: 250px;
  position: relative;
}
</style>