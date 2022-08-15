<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <YsTable :tableData="userList" :propOption="propOption">
        <template #enable="scope">
          <el-button type="primary">{{ scope.row.enable }}</el-button>
        </template>
      </YsTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useStore } from "@/store"
import { searchFormConfig } from "./config/search.config"
import PageSearch from "@/components/page-search"
import YsTable from "@/base-ui/table"
export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    YsTable
  },
  setup() {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propOption = [
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
        minWidth: "100",
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
        minWidth: "130"
      },
      {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "130"
      }
    ]
    return {
      searchFormConfig,
      userList,
      userCount,
      propOption
    }
  }
})
</script>

<style scoped lang="less">
.user {
  .content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
  }
}
</style>
