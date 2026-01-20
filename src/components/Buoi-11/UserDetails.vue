<script setup>
import { useRoute } from "vue-router";
import { useFetch } from "./composables/useFetch";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const route = useRoute();
const { users, error, loading } = useFetch(
  "https://jsonplaceholder.typicode.com/users/" + route.params.id,
);
</script>
<template>
  <Loading v-model:active="loading" />
  <div class="card" v-if="users">
    <h1>{{ users.username }}</h1>

    <p>id: {{ users.id }}</p>
    <p>Full name: {{ users.name }}</p>
    <p>Phone: {{ users.phone }}</p>
    <p>Address: {{ users.address.street }}</p>
  </div>
</template>
<style scoped>
.card {
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
  margin-top: 30px;
  width: 700px;
  background-color: beige;
}
</style>
