<script setup>
import { ref } from "vue";
import { UIStore } from "./stores/UIstore";
import { useAuthStore } from "./stores/useAuthStore";

const UI = UIStore();
const useAuth = useAuthStore();
const name = ref("");
const password = ref("");
</script>
<template>
  <form
    v-if="!useAuth.isLoggedIn"
    action=""
    @submit.prevent="
      () => {
        useAuth.login(name, password);
      }
    "
  >
    <label>Name: </label>
    <input v-model="name" />
    <label>Password</label>
    <input v-model="password" />
    <button>Login</button>
  </form>
  <p v-if="UI.errorMessage">{{ UI.errorMessage }}</p>
</template>
<style scoped>
form {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}
form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}
form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}
form input:focus {
  border-color: #007bff;
  outline: none;
}
form button {
  width: 100%;
  padding: 12px;
  background: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}
form button:hover {
  background: #0056b3;
}
p {
  color: red;
}
</style>
