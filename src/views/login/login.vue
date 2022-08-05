<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginPanel from "./cpns/login-panel.vue"
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/login-bg.svg");
}
</style>
