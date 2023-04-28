import Vue from 'vue'
import App from './App.vue'
import XTree from './plugins/tree/index'
Vue.config.productionTip = false

Vue.use(XTree)
new Vue({
  render: h => h(App),
}).$mount('#app')
