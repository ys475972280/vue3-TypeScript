<template>
  <div>
    <el-button type="primary">测试</el-button>
    <el-input />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { ElButton } from "element-plus"
export default defineComponent({
  components: {
    ElButton
  },
  setup() {
    let count = ref(1)
    const addCount = () => {
      count.value++
    }
    return {
      count,
      addCount
    }
  }
})
</script>

<style scoped lang="less"></style>
