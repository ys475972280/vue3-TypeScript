<template>
  <div class="login-phone">
    <el-form
      label-width="70px"
      :rules="phoneRules"
      :model="phoneInfo"
      ref="formRef"
    >
      <el-form-item label="手机号:" prop="phoneNum">
        <el-input v-model="phoneInfo.phoneNum" maxlength="11" />
      </el-form-item>
      <el-form-item label="验证码:" prop="code">
        <div class="verification-code">
          <el-input v-model="phoneInfo.code" type="code" maxlength="4" />
          <el-button
            type="primary"
            class="get-code"
            @click="handleGetCode"
            :disabled="isClick"
            >{{ codeText }}
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
import { phoneRules } from "../config/account-config"
import { ElForm } from "element-plus"

export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const phoneInfo = reactive({
      phoneNum: "",
      code: ""
    })
    const codeText = ref("获取验证码")
    const countdown = ref(10)
    const isClick = ref(false)
    //定义方法
    //验证码倒计时
    const handleGetCode = () => {
      formRef.value?.validateField("phoneNum", (valid) => {
        if (valid) {
          codeText.value = `重新获取 ${countdown.value}s`
          const timer = setInterval(() => {
            countdown.value--
            isClick.value = true
            if (countdown.value === 0) {
              codeText.value = "获取验证码"
              countdown.value = 10
              isClick.value = false
              clearInterval(timer)
            } else {
              codeText.value = `重新获取 ${countdown.value}s`
            }
          }, 1000)
        }
      })
    }
    //点击登录调用的方法
    const phoneAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          handleGetCode()
          store.dispatch("login/phoneLoginAction", { ...phoneInfo })
        }
      })
    }
    //切换状态清空input
    const clearPhoneInfo = () => {
      console.log("clearPhoneInfo")
      phoneInfo.phoneNum = ""
      phoneInfo.code = ""
      formRef.value?.resetFields()
    }
    return {
      phoneInfo,
      phoneRules,
      codeText,
      handleGetCode,
      isClick,
      phoneAction,
      formRef,
      clearPhoneInfo
    }
  }
})
</script>

<style scoped lang="less">
.verification-code {
  display: flex;

  .get-code {
    margin-left: 8px;
  }
}
</style>
