<template>
  <div class="overview">
    <h2>overview</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: "overview",
  setup() {
    console.log("触发了首页的方法")
    return {}
  }
})
</script>

<style scoped></style>
