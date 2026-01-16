<script setup>
import { onMounted, ref } from "vue";
import { getUsers } from "./services/userService";
import useUsers from "./store/users";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const userStore = useUsers();
const isLoading = ref(false);
console.log("ok");
onMounted(async () => {
  isLoading.value = true;
  try {
    const data = await getUsers();
    userStore.userList = data;
  } catch (err) {
    alert(err);
  } finally {
    isLoading.value = false;
  }
});
</script>
<template>
  <loading v-model:active="isLoading" />
  <table v-if="userStore.userList.length > 0 && !isLoading">
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
    <tr v-for="user in userStore.userList">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
    </tr>
  </table>
  <h2 v-else style="color: red">There is nothing in here</h2>
</template>
<style scoped>
table {
  border-collapse: collapse;
  background-color: bisque;
  margin-top: 25px;
  margin-left: 20px;
}
td,
th {
  border: 1px solid black;
}
td {
  padding: 15px;
  cursor: pointer;
}
tr:hover {
  background-color: yellow;
}
</style>
