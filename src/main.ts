import { createApp } from "vue"
import App from "./App.vue"

import router from "@/router"
import store from "@/store"
import { BASE_URL } from "@/service/request/config"

import { globalRegister } from "@/global"
import { setupStore } from "@/store/index"
import "normalize.css" // npm install normalize.css 安装初始化css
import "./assets/css/index.less"
// import ysRequest from "@/service"
const app = createApp(App)
//注册常用的Element-plus的组件
//globalRegister(app)
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
app.mount("#app")
console.log("环境变量-->", process.env)
console.log("BASE_URL", BASE_URL)

// interface dataType {
//   data: any
//   msg: string
//   code: number
//   requestTime: number
//   responseId: number
//   responseTime: number
// }

// ysRequest
//   .get<dataType>({
//     //url: "/mall/product/index/product/recommend?size=20&page=1",
//     url: "/mall/product/operationPosition/getRecommendPosition?locationId=18381017186304"
//     // method: "get"
//     // interceptors: {
//     //   requestInterceptor: (config) => {
//     //     console.log("单独请求的config拦截")
//     //     return config
//     //   },
//     //   responseInterceptor: (res) => {
//     //     console.log("单独响应的config拦截")
//     //     return res
//     //   }
//     // }
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.code)
//   })
