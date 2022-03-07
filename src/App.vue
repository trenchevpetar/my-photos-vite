<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useLoginStore } from './stores/login'
const loginStore = useLoginStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/about" v-if="loginStore.getIsLoggedIn"></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import './assets/reset';
</style>
