import type { AxiosRequestConfig, AxiosResponse } from "axios"

//因为不同请求可能拦截不一样，所以这儿进行一个自定义拦截器的封装
export interface YSRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  //responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

//为了扩展interceptor
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YSRequestInterceptors<T>
  showLoading?: boolean
}
