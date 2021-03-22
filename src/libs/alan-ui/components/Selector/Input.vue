 <template>
  <div class="selector-input">
    <input type="text" :placeholder="placeholder" class="input" />
    <i class="iconfont iconarrowdown"></i>
  </div>
</template>
 
 <script>
export default {
  name: "SelectorInput",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
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
    z-index: 1;
    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 3px #1890ff;
    }
  }
  .placeholder,
  .iconfont {
    position: absolute;
  }
  .placeholder {
    left: 15px;
    top: 8px;
    color: #999;
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