export const contentTableConfig = {
  title: "用户列表",
  propOption: [
    {
      prop: "name",
      label: "角色名",
      minWidth: "100"
    },
    {
      prop: "intro",
      label: "权限介绍",
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
