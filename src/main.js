import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import  i18n  from '@/plugins/i18n.ts'
import routes  from '@/routes/index.ts'


createApp(App).use(i18n).use(routes).mount('#app')
