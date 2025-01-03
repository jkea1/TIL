import { createApp } from 'vue'
import App from '~/App'
import fetchPlugin from '~/plugins/fetch'

const app = createApp(App)
// 컴포넌트를 전역에 등록한다.
app.use(fetchPlugin, {
  pluginName: '$myName',
})
app.mount('#app')
