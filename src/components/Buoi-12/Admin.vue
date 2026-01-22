<script setup>
import { userAuth } from "./store/userAuth";
const ROLE = {
  ADMIN: "admin",
  USER: "user",
};
const auth = userAuth();
</script>
<template>
  <h1>Admin page</h1>
  <div v-if="auth.role === ROLE.ADMIN">Admin panel</div>
  <h3 v-else>Access denied</h3>
</template>
<style scoped>
h1 {
  background-color: blanchedalmond;
  margin-left: 15px;
  padding: 15px;
  width: 700px;
}
h3 {
  color: red;
}
</style>
