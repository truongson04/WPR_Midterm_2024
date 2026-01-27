<script setup>
import { onMounted } from "vue";
import { UserStore } from "./stores/UserStore";
import { UIStore } from "./stores/UIstore";
import { useAuthStore } from "./stores/useAuthStore";

const userStore = UserStore();
const useAuth = useAuthStore();
const UI = UIStore();
onMounted(() => {
  userStore.getUsers();
});
</script>
<template>
  <div v-if="useAuth.isLoggedIn" class="user-list-container">
    <h3>Welcome {{ useAuth.user.username }}</h3>
    <p v-if="UI.loading">Loading...</p>
    <ol v-if="userStore.users.length > 0">
      <li v-for="user in userStore.users">{{ user.username }}</li>
    </ol>
  </div>
</template>
<style scoped>
.user-list-container {
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}
.user-list-container h3 {
  margin-bottom: 10px;
  color: #007bff;
}
.user-list-container p {
  font-style: italic;
  color: #666;
}
.user-list-container ol {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}
.user-list-container li {
  padding: 12px 15px;
  margin-bottom: 8px;
  background: #f8f9fa;
  border-radius: 6px;
  transition:
    background 0.3s,
    transform 0.2s;
  border: 1px solid #e0e0e0;
}
.user-list-container li:hover {
  background: #e9f2ff;
  transform: translateX(5px);
}
</style>
