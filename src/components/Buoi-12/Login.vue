<script setup>
import { useRouter } from "vue-router";
import { userAuth } from "./store/userAuth";
const router = useRouter();
const auth = userAuth();
const handleLogin = (roleValue) => {
  auth.isLoggedIn = true;
  auth.role = roleValue;
  router.push({
    path: `/${roleValue}`,
  });
};
</script>
<template>
  <div class="login-card">
    <h1>Login</h1>
    <button @click="handleLogin('admin')">Login as admin</button>
    <button @click="handleLogin('users')">Login as user</button>
  </div>
</template>
<style scoped>
.login-card {
  border: 1px solid black;
  width: 700px;
  padding: 15px;
  border-radius: 15px;
  background-color: blanchedalmond;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.login-card button {
  padding: 15px;
  border-radius: 15px;
  margin-left: 10px;
  cursor: pointer;
  background-color: cyan;
  font-weight: bold;
  border: none;
}
.login-card h1 {
  text-align: center;
}
.login-card button:hover {
  background-color: gray;
}
</style>
