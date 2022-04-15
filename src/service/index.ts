// service 统一出口
import YSRequest from "./request"
import { BASE_URL } from "./request/config"

const ysRequest = new YSRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求成功的拦截", config)
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log("请求失败的拦截")
      return error
    },
    responseInterceptor: (res) => {
      console.log("响应成功的拦截")
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log("响应失败的拦截")
      return error
    }
  }
})
export default ysRequest
