<template>
  <div class="page-search">
    <YsForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h4>高级检索</h4>
      </template>
      <template #footer>
        <el-button type="primary">重置</el-button>
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
  setup() {
    const formData = ref({
      name: "",
      password: "",
      sport: "",
      createTime: ""
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>
