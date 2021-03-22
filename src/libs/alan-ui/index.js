import Selector from './components/Selector/index.vue'
import './assets/iconfont/iconfont.css'
let AlanUI = {}

AlanUI.install = (app) => {
    app.component(Selector.name, Selector);
}
export default AlanUI