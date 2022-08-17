import { IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  // labelWidth: "120px",
  // itemStyle: {
  //   padding: "0 0"
  // },
  // colLayout: {
  //   span: 8
  // },
  formItem: [
    {
      field: "name",
      label: "角色名",
      rules: [],
      placeholder: "请输入角色名",
      type: "input"
    },
    {
      field: "intro",
      label: "权限介绍",
      placeholder: "请输入权限介绍",
      type: "input"
    },
    {
      field: "createTime",
      label: "创建时间",
      type: "datepicker",
      otherOption: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
}
