<script setup>
import { authStore } from "./stores/useAuthStore";
import { ref } from "vue";
const auth = authStore();
const name = ref("");
const password = ref("");
function onLogin() {
  if (name.value && password.value) {
    auth.login(name.value);
  }
}
</script>
<template>
  <form @submit.prevent="onLogin" v-if="auth.displayName === 'Guest'">
    <h3>Login form</h3>
    <label>Name:</label>
    <input type="text" name="name" v-model="name" />
    <label> Password</label>
    <input type="password" name="password" v-model="password" />
    <button>Login</button>
  </form>
</template>
<style scoped>
form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
  width: 700px;
  border-radius: 15px;
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
}
form h3 {
  text-align: center;
  font-weight: bold;
}
form input {
  max-width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 30px;
  border-radius: 15px;
  background-color: azure;
}
form button {
  width: 100px;
  padding: 5px;
  background-color: blue;
  color: white;
  border-radius: 15px;
  margin: 0 auto;
}
</style>
