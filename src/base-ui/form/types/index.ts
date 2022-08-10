type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItem {
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  type: IFormType
  //针对select
  option?: any
  //  针对特殊的属性
  otherOption?: any
}

export interface IForm {
  formItem: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
