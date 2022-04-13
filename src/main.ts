import { createApp } from "vue"
import App from "./App.vue"

import router from "@/router"
import store from "@/store"
import { BASE_URL } from "@/service/request/config"

import { globalRegister } from "@/global"
import ysRequest from "@/service"

const app = createApp(App)
//注册常用的Element-plus的组件
//globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")
console.log("环境变量-->", process.env)
console.log("BASE_URL", BASE_URL)
ysRequest.request({
  url: "/mall/product/index/product/recommend?size=20&page=1",
  method: "get"
})
