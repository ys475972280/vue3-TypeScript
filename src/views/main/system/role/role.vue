<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent :contentTableConfig="contentTableConfig" page-name="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
