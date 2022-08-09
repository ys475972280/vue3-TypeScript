<template>
  <div class="nav-header">
    <div @click="handleFoldClick" class="shrink-and-expand">
      <el-icon :size="30" v-if="isFold"><Fold /></el-icon>
      <el-icon :size="30" v-else><Expand /></el-icon>
    </div>
    <div class="content">
      <div>
        <NavBreadcrumb />
      </div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Fold, Expand } from "@element-plus/icons-vue"
import UserInfo from "./user-info.vue"
import NavBreadcrumb from "./nav-breadcrumb.vue"
export default defineComponent({
  components: {
    Fold,
    Expand,
    UserInfo,
    NavBreadcrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    return {
      isFold,
      handleFoldClick
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
