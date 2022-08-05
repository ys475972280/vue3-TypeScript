<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      class="login-panel-tabs"
      stretch
      v-model="currentTab"
      @tab-click="handleChangeTabPane"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control" v-if="currentTab === 'account'">
      <el-checkbox v-model="isKeepPassWord">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Cellphone, User } from "@element-plus/icons-vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"
import localCache from "@/utils/cashe"
import type { TabsPaneContext } from "element-plus"
export default defineComponent({
  components: {
    Cellphone,
    User,
    LoginAccount,
    LoginPhone
  },
  setup() {
    //定义属性
    const isKeepPassWord = ref(localCache.getCache("isKeepPassWord") ?? false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>("account")
    //定义方法
    const handleLoginClick = () => {
      if (currentTab.value === "account") {
        console.log("点击登录", accountRef.value)
        accountRef.value?.loginAction(isKeepPassWord.value)
      } else {
        phoneRef.value?.phoneAction()
        console.log("手机号登录")
      }
    }
    const handleChangeTabPane = (tabsPane: TabsPaneContext) => {
      console.log("切换", tabsPane.paneName)
      if (tabsPane.paneName === "account") {
        phoneRef.value?.clearPhoneInfo()
      } else {
        accountRef.value?.clearAccount(isKeepPassWord.value)
      }
    }
    return {
      isKeepPassWord,
      handleLoginClick,
      accountRef,
      phoneRef,
      currentTab,
      handleChangeTabPane
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .login-panel-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .login-panel-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .login-panel-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
  .account-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
