import { createApp } from "vue"
import App from "./App.vue"

import router from "@/router"
import store from "@/store"

import { globalRegister } from "@/global"

const app = createApp(App)
//注册常用的Element-plus的组件
//globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")
