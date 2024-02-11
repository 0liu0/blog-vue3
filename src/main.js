import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from '@/router'
import 'animate.css';

const app = createApp(App)
// 引入elementUI图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
app.use(router)

app.mount('#app')
