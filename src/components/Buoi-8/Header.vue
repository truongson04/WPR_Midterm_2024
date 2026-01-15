<script setup>
import Login from "./Login.vue";
import { authStore } from "./stores/useAuthStore";

const userInfo = authStore();
console.log(userInfo.isLoggedIn);
</script>
<template>
  <div>
    <button v-show="userInfo.displayName !== 'Guest'" @click="userInfo.logout">
      Logout
    </button>
    <button v-show="userInfo.displayName === 'Guest'">Login</button>
    <h3>{{ userInfo.displayName }}</h3>
  </div>
</template>
<style scoped>
div {
  margin-top: 15px;
  border-bottom: 1px solid rgb(175, 170, 170);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
div button {
  padding: 5px;
  border-radius: 5px;
  background-color: aqua;
  cursor: pointer;
}
div button:hover {
  background-color: purple;
  color: wheat;
}
</style>
