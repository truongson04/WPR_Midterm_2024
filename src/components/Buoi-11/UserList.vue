<script setup>
import { watch } from "vue";
import { useFetch } from "./composables/useFetch";
import { useRouter } from "vue-router";

const { users, error, loading } = useFetch(
  "https://jsonplaceholder.typicode.com/users",
);
const router = useRouter();
const handleClick = (id) => {
  router.push({
    name: "User",
    params: {
      id: parseInt(id),
    },
  });
};
</script>
<template>
  <h1>List</h1>
  <p v-if="loading">Loading...</p>
  <ol v-if="users">
    <li v-for="user in users" @click="handleClick(user.id)">
      {{ user.username }}
    </li>
  </ol>
  <h3 v-else>{{ error }}</h3>
</template>
<style lang="css" scoped>
ol {
  border: 1px solid black;
  width: 700px;
  margin-left: 35px;
  background-color: beige;
}
ol li {
  padding: 15px;
  border: 1px solid black;
  cursor: pointer;
}
h1 {
  margin-left: 35px;
  margin-top: 10px;
  font-size: 30px;
}
ol li:hover {
  background-color: orange;
}
</style>
