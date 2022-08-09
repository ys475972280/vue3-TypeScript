<template>
  <div class="overview">
    <h2>overview</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, nextTick, ref } from "vue"

export default defineComponent({
  name: "overview",
  setup() {
    const isRouterAlive = ref(true)
    const reload = () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    }
    provide("reload", reload)
    console.log("触发了首页的方法")
    return {}
  }
})
</script>

<style scoped></style>
