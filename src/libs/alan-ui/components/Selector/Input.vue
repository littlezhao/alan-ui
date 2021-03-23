 <template>
  <div class="selector-input">
    <input
      type="text"
      ref="inputElement"
      :placeholder="placeholder"
      :value="inputValue"
      class="input"
      @input="search"
      @blur="setLatestValue(inputValue)"
    />
    <i class="iconfont iconarrowdown"></i>
  </div>
</template>
 
 <script>
import { getCurrentInstance } from "vue";
export default {
  name: "SelectorInput",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    inputValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const search = (e) => {
      emit("search", e.target.value);
    };
    const setLatestValue = (value) => {
      const _input = instance.refs.inputElement;
      if (_input.value.length > 0) {
        _input.value = value;
      }
    };
    return { search, setLatestValue };
  },
};
</script>
 
<style lang="scss">
.selector-input {
  position: relative;
  width: 100%;
  height: 32px;
  .input {
    width: 100%;
    height: 100%;
    padding: 0px 22px 0px 10px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s linear;
    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 3px #1890ff;
    }
  }
  .iconfont {
    position: absolute;
  }
  .iconfont {
    transform: translateY(-3px);
    right: 8px;
    top: 12px;
    color: #999;

    &.icon-search {
      font-size: 16px;
      top: 8px;
    }
  }
}
</style>