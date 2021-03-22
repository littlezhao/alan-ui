<template>
  <div class="selector" v-focus>
    <selector-input :placeholder="placeholder" />
  </div>
</template>
<script>
import SelectorInput from "./Input.vue";
import focus from "../../directives/focus.js";
export default {
  name: "Selector",
  components: {
    SelectorInput,
  },
  props: {
    placeholder: {
      type: String,
    },
  },
  directives: {
    focus,
  },
};
</script>

<style lang="scss">
.selector {
  width: 250px;
  position: relative;
}
</style>