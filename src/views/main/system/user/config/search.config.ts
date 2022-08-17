import { IForm } from "@/base-ui/form/types"
export const searchFormConfig: IForm = {
  // labelWidth: "120px",
  itemStyle: {
    padding: "0 0"
  },
  // colLayout: {
  //   span: 8
  // },
  formItem: [
    {
      field: "name",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名",
      type: "input"
    },
    {
      field: "password",
      label: "密码",
      rules: [],
      placeholder: "请输入密码",
      type: "password"
    },
    {
      field: "sport",
      label: "喜欢的运动",
      placeholder: "请选择喜欢的运动",
      type: "select",
      option: [
        {
          title: "篮球",
          value: "1"
        },
        {
          title: "足球",
          value: "2"
        }
      ]
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
