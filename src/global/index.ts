import type { App } from "vue"
import registerElement from "./register-element"
//注册element-ui组件
export function globalRegister(app: App): void {
  registerElement(app)
}
