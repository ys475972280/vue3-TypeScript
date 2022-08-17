<template>
  <div class="page-content">
    <YsTable
      v-bind="contentTableConfig"
      :tableData="dataList"
      @selectionChange="tableSelectionChange"
    >
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <template #enable="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-tag>
      </template>
      <template #createAt="scope">
        <strong>
          {{ $filters.formatTime(scope.row.createAt) }}
        </strong>
      </template>
      <template #updateAt="scope">
        <strong>
          {{ $filters.formatTime(scope.row.updateAt) }}
        </strong>
      </template>
      <template #handle>
        <div class="handle-btn">
          <el-button type="text">编辑</el-button>
          <el-button type="text">查看</el-button>
          <el-button type="text">删除</el-button>
        </div>
      </template>
    </YsTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import YsTable from "@/base-ui/table"
import { useStore } from "@/store"

export default defineComponent({
  components: {
    YsTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)
    return {
      dataList
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
