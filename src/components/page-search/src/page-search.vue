<template>
  <div class="page-search">
    <YsForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h4>高级检索</h4>
      </template>
      <template #footer>
        <el-button type="primary" @click="handleResetClick">重置</el-button>
        <el-button>搜索</el-button>
      </template>
    </YsForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import YsForm from "@/base-ui/form"
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    YsForm
  },
  setup(prpos) {
    //双向绑定的属性由配置文件的filed来决定
    //1.优化一:formData动态决定
    const formItem = prpos.searchFormConfig?.formItem ?? []
    const formOriginData: any = {}
    for (const item of formItem) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)
    const handleResetClick = () => {
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped lang="less"></style>
