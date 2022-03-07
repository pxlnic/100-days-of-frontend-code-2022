// Imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'

// Create App
const app = createApp(App)

// App Extensions
app.use(createPinia())
app.use(router)

// Error Handler
app.config.errorHandler = (err, instance, info) => {
    // Configure Error
    console.log('ERROR: ')
    console.log(err)
    console.log(instance)
    console.log(info)
}

// Mount App
app.mount('#app')
