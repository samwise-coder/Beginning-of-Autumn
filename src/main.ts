import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//自定义插件
import testplugins from './plugin/MyFristPlugin'
createApp(App).use(store).use(router).use(testplugins).mount('#app')
