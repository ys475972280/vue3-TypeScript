import axios from "axios"
import type { AxiosInstance } from "axios"
import type { YSRequestInterceptors, HYRequestConfig } from "./type"

class YSRequest {
  instance: AxiosInstance
  interceptors?: YSRequestInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有的实列都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实列都有的拦截器：请求拦截成功")
        return config
      },
      (error) => {
        console.log("所有的实列都有的拦截器：请求拦截失败")
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实列都有的拦截器：响应拦截成功")
        return res
      },
      (error) => {
        console.log("所有的实列都有的拦截器：响应拦截失败")
        return error
      }
    )
  }

  //如果要针对单个请求进行拦截时，此时config类型应该转换成扩展后的config类型，因为config自身不带拦截器
  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
        return res
      }
      console.log(res)
    })
  }
}

export default YSRequest
