<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const users = ref([]);
const router = useRouter();
onMounted(async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    users.value = data.data;
  } catch (err) {
    console.log(err);
  }
});
</script>
<template>
  <h1>Users List</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user.id"
        @click="
          router.push({
            name: 'UserId',
            params: {
              id: user.id,
            },
          })
        "
      >
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
      </tr>
    </tbody>
  </table>

  <router-view :users="users" />
</template>
<style scoped>
table {
  border-collapse: collapse;
}
table,
td,
th {
  border: 1px solid black;
}
td {
  padding: 15px;
}
tbody td {
  cursor: pointer;
}
tbody tr:hover {
  background-color: rgb(187, 174, 174);
}
</style>
