<script setup lang="ts">
import { reactive } from 'vue'
import { Form as AForm, Card as ACard, FormItem as AFormItem, Input as AInput, InputPassword as AInputPassword, Button as AButton } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { genTestUserSig } from './../../debug'
import { useTIMStore } from '../store/chat'
const $router = useRouter()
const $TIMStore = useTIMStore()
interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: '',
  password: '',
})

const hanldeLogin = () => {
  // 生成密钥
  $router.push('/home')
  const { userSig } = genTestUserSig({
    userID: formState.username,
    SDKAppID: 1600055412,
    secretKey: 'acc45cab4927f242868a6e0d420aa513adf389d8d7787947afdc2d0bca119075',
  })
  $TIMStore.timCore.timLogin({
    userSig,
    userID: formState.username,
  })
}
</script>

<template>
  <div class="login-box">
    <a-card style="width: 300px">
      <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="hanldeLogin">
        <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<style scoped>
.login-box {
  background-color: #2f3447;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
