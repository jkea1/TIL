import { createApp } from 'vue'
import App from '~/App.vue'
import fetchPlugin from '~/plugins/fetch'

const app = createApp(App)
app.use(fetchPlugin, {
  pluginName: '$myName', // 이 부분 없으면 $fetch로 해야 응답이 온다.
})
app.mount('#app')
