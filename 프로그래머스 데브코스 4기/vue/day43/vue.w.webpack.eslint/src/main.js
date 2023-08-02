import { createApp } from 'vue'
import App from '~/App'
import Btn from '~/components/Btn'

const app = createApp(App)
// 컴포넌트를 전역에 등록한다.
app.component('Btn', Btn) // '이름 아무거나'
app.mount('#app')
