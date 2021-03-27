<template>
  <div class="modal-mask" v-show="state.modalShow" @click="cancle"></div>
  <div
    class="modal-container"
    :style="{
      borderRadius: borderRadius + 'px',
      width: width + 'px',
      top: position == 'center' ? '50%' : '50px',
      transform: position == 'center' ? 'translate(-50%,-50%)' : '',
    }"
    v-show="state.modalShow"
  >
    <div
      class="modal-title border-bootom"
      :style="{
        backgroundColor: headerColor,
        color: headerTextColor,
      }"
    >
      <h5>
        {{ headerText }}
      </h5>
      <span @click="cancle" style="cursor: pointer">&times;</span>
    </div>
    <div class="modal-content border-bootom">
      <p>{{ contentText }}</p>
    </div>
    <div class="modal-footer" v-if="btnGroupShow">
      <button class="btn btn-cancle" @click="cancle">
        {{ cancleText }}
      </button>
      <button
        class="btn btn-confirm"
        :style="{
          backgroundColor: headerColor,
          color: headerTextColor,
        }"
        @click="confirm"
      >
        {{ confirmText }}
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
  name: "AlModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 500,
    },
    borderRadius: {
      type: Number,
      default: 4,
    },
    headerColor: {
      type: String,
      default: "#000",
    },
    headerText: {
      type: String,
      default: "",
    },
    headerTextColor: {
      type: String,
      default: "#fff",
    },
    contentText: {
      type: String,
      default: "",
    },
    contentTextColor: {
      type: String,
      default: "#000",
    },
    position: {
      type: String,
      default: "top",
    },
    btnGroupShow: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: "Save Changes",
    },
    cancleText: {
      type: String,
      default: "取消",
    },
  },
  emits: ["cancle", "confirm"],
  setup(props, { emit }) {
    const state = reactive({
      modalShow: props.show,
    });
    watch(
      () => props.show,
      () => {
        state.modalShow = props.show;
        console.log(props.show);
      }
    );
    const cancle = () => {
      state.modalShow = false;
      emit("cancle");
    };
    const confirm = () => {
      state.modalShow = false;
      emit("confirm");
    };
    return {
      cancle,
      confirm,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.modal-container {
  position: fixed;
  left: 50%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 1px 2px 3px #333;
  transform: translateX(-50%);
  .modal-title {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    h5 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: normal;
    }
  }
  .modal-content {
    padding: 16px;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 6px;
    .btn {
      padding: 6px 12px;
      text-align: center;
      border: unset;
      border-radius: 4px;
      color: #fff;
    }
    .btn-cancle {
      margin-right: 5px;
      background-color: #6c757d;
    }
    .btn-confirm {
      background-color: #007bff;
    }
  }
}
.border-bootom {
  border-bottom: 1px solid #dee2e6;
}
</style>