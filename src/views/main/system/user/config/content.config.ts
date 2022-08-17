export const contentTableConfig = {
  title: "用户列表",
  propOption: [
    {
      prop: "name",
      label: "用户名",
      minWidth: "100"
    },
    {
      prop: "realname",
      label: "真实姓名",
      minWidth: "100"
    },
    {
      prop: "cellphone",
      label: "电话号码",
      minWidth: "110"
    },
    {
      prop: "enable",
      label: "状态",
      slotName: "enable"
    },
    {
      prop: "roleId",
      label: "角色",
      minWidth: "100"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "130",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "130",
      slotName: "updateAt"
    },
    {
      label: "操作",
      minWidth: "140",
      slotName: "handle"
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
