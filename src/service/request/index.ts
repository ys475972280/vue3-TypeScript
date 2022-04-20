import axios from "axios"
import type { AxiosInstance } from "axios"
import type { YSRequestInterceptors, HYRequestConfig } from "./type"
import { ElLoading, ElNotification } from "element-plus"
// import { LoadingOptionsResolved } from "element-plus/es/components/loading/src/types"
import "element-plus/es/components/loading/style/css"
import "element-plus/es/components/notification/style/css"

let loadingInstance: any
const DEFAULT_LOADING = true

class YSRequest {
  instance: AxiosInstance
  interceptors?: YSRequestInterceptors
  showLoading: boolean

  constructor(config: HYRequestConfig) {
    //创建axios实列
    this.instance = axios.create(config)
    //保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    //使用拦截器
    //1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //2.添加所有的实列都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实列都有的拦截器：请求拦截成功")
        if (this.showLoading) {
          loadingInstance = ElLoading.service({
            lock: true,
            text: "正在请求数据..."
            //background: "rgba(0,0,0,0.5)"
          })
        }
        return config
      },
      (error) => {
        console.log("所有的实列都有的拦截器：请求拦截失败")
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实列都有的拦截器：响应拦截成功", res.data)
        loadingInstance?.close()
        const data = res.data
        switch (data.code) {
          case 401:
            ElNotification({
              title: "失败",
              message: res.data.msg,
              type: "error"
            })
            break
          case 0:
            console.log("请求成功")
            return data
        }
      },
      (error) => {
        console.log("所有的实列都有的拦截器：响应拦截失败")
        switch (error.response.status) {
          case 404:
            console.log("404的错误")
            break
        }
        return error
      }
    )
  }

  //如果要针对单个请求进行拦截时，此时config类型应该转换成扩展后的config类型，因为config自身不带拦截器
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    console.log("request", config)
    return new Promise((resolve, reject) => {
      //1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //2.判断是否展示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
            // return res.data
          }
          //2.将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          //3.将结果resolve返回出去
          resolve(res)
        })
        .catch((e) => {
          this.showLoading = DEFAULT_LOADING
          reject(e)
        })
    })
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }
  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
  put<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" })
  }
}

export default YSRequest
