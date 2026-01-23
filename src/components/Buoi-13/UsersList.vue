<script setup>
import { ref, computed, watch } from "vue";
import useFetch from "./composables/useFetch";
const { data: list } = useFetch("https://dummyjson.com/users");
const search = ref("");
const query = ref("");
const filteredUsers = computed(() => {
  if (!list.value) {
    return [];
  }
  let newList = list.value.users;
  if (query.value) {
    newList = list.value.users.filter((user) => {
      return user.username === query.value.toLocaleLowerCase();
    });
  }

  return newList;
}); // Sử dụng computed để lọc không để log bởi  hàm computed chỉ được thực hiện nếu cái biến mình gán hàm computed đó được thể hiện ra trên màn hình

watch(search, () => {
  if (search.value.length >= 3) {
    console.log("Searching...");
  }
}); // watch thì chỉ cần biến nó theo dõi thay đổi thì lập tức hàm callback trong watch sẽ được thực hiện, không quan tâm có hiển thị ra màn hình hay không
const handleSearch = () => {
  query.value = search.value;
};
</script>
<template>
  <label>Name: </label>
  <input
    placeholder="Type user name..."
    v-model="search"
    @keyup.enter="handleSearch"
  />
  <button @click="handleSearch">Search</button>

  <table v-if="filteredUsers.length > 0" class="filtered">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr v-for="user in filteredUsers">
      <td>{{ user.username }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>
  <h3 v-else>There is no matching user</h3>
</template>
<style scoped>
table {
  border-collapse: collapse;
  margin-left: 30px;
}
td,
th {
  border: 1px solid black;
  padding: 15px;
}
th {
  height: 50px;
  width: 50px;
}
tr {
  background-color: bisque;
  cursor: pointer;
}
tr:hover {
  background-color: orange;
}
.filtered {
  height: 100%;
}
</style>
