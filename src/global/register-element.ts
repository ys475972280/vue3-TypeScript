import type { App } from "vue"
import { ElButton, ElForm, ElFormItem, ElInput } from "element-plus"

const components = [ElButton, ElForm, ElFormItem, ElInput]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
