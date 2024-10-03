<script setup lang="ts">
import { useUserStore } from './store/user'
// import HelloWorld from './components/HelloWorld.vue'

const userStore = useUserStore()
</script>

<template>
  <div>
    {{ userStore.age }}
    计算属性:{{ userStore.doubleAge }} 计算属性:{{ userStore.getNameAndAge }}
    <button @click="userStore.saveName('sadasd')">修改名字</button>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
