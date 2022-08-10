<template>
  <div class="nav-header">
    <div @click="handleFoldClick" class="shrink-and-expand">
      <el-icon :size="30" v-if="isFold">
        <Fold />
      </el-icon>
      <el-icon :size="30" v-else>
        <Expand />
      </el-icon>
    </div>
    <div class="content">
      <YsBreadCrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { Fold, Expand } from "@element-plus/icons-vue"
import UserInfo from "./user-info.vue"
import YsBreadCrumb, { IBreadcrumb } from "@/base-ui/breadcrumb/index"
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { pathMapBreadcrumbs } from "@/utils/map-menus"

export default defineComponent({
  components: {
    Fold,
    Expand,
    UserInfo,
    YsBreadCrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    //面包屑数据[{name:'',path:''}]
    const store = useStore()
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .shrink-and-expand {
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
