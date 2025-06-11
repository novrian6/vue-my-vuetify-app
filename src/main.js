import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // <-- import Vuetify plugin

createApp(App)
  .use(vuetify)
  .mount('#app')