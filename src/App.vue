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
  <div class="message-container">
    <button
      class="success"
      @click="$message.success({ text: '这是一条success消息提示' })"
    >
      success
    </button>
    <button
      class="error"
      @click="$message.error({ text: '这是一条error消息提示' })"
    >
      error
    </button>
    <button
      class="info"
      @click="$message.info({ text: '这是一条info消息提示' })"
    >
      info
    </button>
    <button
      class="warn"
      @click="$message.warn({ text: '这是一条warn消息提示' })"
    >
      warn
    </button>
    <button class="success" @click="showMessage">showMessage</button>
  </div>
  <button class="modal-launch" @click="lanunchModal">lanunchModal</button>
  <al-modal
    :show="modalshow"
    headerText="this is modal title"
    headerColor="#4caf50"
    :width="600"
    headerTextColor="#fff"
    :borderRadius="4"
    position="center"
    contentText="this is a modal by alan"
    contentTextColor="#000"
    :btnGroupShow="true"
    @cancle="cancle"
    @confirm="confirm"
  ></al-modal>
</template>

<script>
import { reactive, ref } from "vue";
import Message from "./libs/alan-ui/components/Message/Message.js";
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
    const modalshow = ref(false);
    const getItem = (item) => {
      console.log(item.id, item.text);
    };
    const showMessage = () => {
      Message.warn("come from showMessage");
    };
    const cancle = () => {
      alert("you have click cancle modal!");
      modalshow.value = false;
    };
    const confirm = () => {
      alert("you have click confirm modal!");
      modalshow.value = false;
    };
    const lanunchModal = () => {
      console.log("clicked!");
      modalshow.value = !modalshow.value;
      console.log(modalshow.value);
    };
    return {
      getItem,
      data,
      menuData,
      showMessage,
      cancle,
      confirm,
      lanunchModal,
      modalshow,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 500px;
  margin: 100px auto;
}
.modal-launch {
  padding: 10px;
  background: #4caf50;
  color: #fff;
  border: unset;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
  z-index: 99;
}
.menu-container {
  width: 220px;
  margin: 100px auto;
}
.message-container {
  width: 1000px;
  margin: 50px auto;
  button {
    width: 150px;
    height: 38px;
    line-height: 38px;
    margin-right: 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 0;
  }
  .success {
    background: #4caf50;
  }
  .info {
    background: #00bcd4;
  }
  .warn {
    background: #ff9800;
  }
  .error {
    background: #f44336;
  }
}
</style>