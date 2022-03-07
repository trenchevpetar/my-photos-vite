<script setup>
import { useLoginStore } from '../stores/login'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

let hasError = ref(false)

const router = useRouter()
const username = ref('')
const password = ref('')
const loginStore = useLoginStore()

const onSubmit = () => {
  loginStore
    .login(username.value, password.value)
    .then(() => {
      router.push('/dashboard')
    })
    .catch((err) => {
      console.log(err)
      hasError.value = true
    })
}
</script>

<template>
  <h1 v-if="hasError">login failed</h1>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button>Login</button>
  </form>
</template>
