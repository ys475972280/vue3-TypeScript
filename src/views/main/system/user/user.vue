<template>
  <div class="user">
    <YsForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h4>高级检索</h4>
      </template>
      <template #footer>
        <el-button type="primary">重置</el-button>
        <el-button type="normal">搜索</el-button>
      </template>
    </YsForm>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import YsForm from "@/base-ui/form"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "user",
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
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
