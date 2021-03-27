import Selector from './components/Selector/index.vue'
import TreeMenu from './components/TreeMenu/index.vue'
import MenuItem from './components/TreeMenu/MenuItem/index.vue'
import SubMenu from './components/TreeMenu/SubMenu/index.vue'
import ReSubMenu from './components/TreeMenu/SubMenu/ReSubMenu.vue'
import AlModal from './components/Modal/index.vue'
import Message from './components/Message/Message.js';
import './assets/css/normalize.scss';
import './assets/iconfont/iconfont.css'
let AlanUI = {}

AlanUI.install = (app) => {
    app.component(Selector.name, Selector);
    app.component(TreeMenu.name, TreeMenu);
    app.component(MenuItem.name, MenuItem);
    app.component(SubMenu.name, SubMenu);
    app.component(ReSubMenu.name, ReSubMenu);
    app.component(AlModal.name, AlModal);
    app.config.globalProperties.$message = Message;
}
export default AlanUI