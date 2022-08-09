<template>
  <div class="user">
    <YsForm v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import YsForm from "@/base-ui/form"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "user",
  components: {
    YsForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
