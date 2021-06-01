import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

import router from './router'
import store from '@/store'

Vue.config.productionTip = false


Vue.use(Vuelidate)

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context
  })
})
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
