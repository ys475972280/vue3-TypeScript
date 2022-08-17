<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <div class="content">
      <PageContent :contentTableConfig="contentTableConfig" page-name="users" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    // store.dispatch("system/getPageListAction", {
    //   pageUrl: "/users/list",
    //   queryInfo: {
    //     offset: 0,
    //     size: 10
    //   }
    // })
    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    const tableSelectionChange = (value: any) => {
      console.log("tableSelectionChange", value)
    }
    return {
      // userList,
      // userCount,
      contentTableConfig,
      searchFormConfig,
      tableSelectionChange
    }
  }
})
</script>

<style scoped lang="less">
.user {
}
</style>
