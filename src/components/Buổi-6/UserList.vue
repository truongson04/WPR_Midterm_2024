<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const users = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    users.value = data;

    console.log("Component mounted");
  } catch (err) {
    console.log(err);
  }
});
onUnmounted(() => {
  console.log("Component unmounted");
});
</script>
<template>
  <ol>
    <h3>User List</h3>
    <li v-for="user in users">{{ user.name }}</li>
  </ol>
</template>
<style scoped>
ol {
  border: 1px solid black;
  padding: 35px;
  flex-direction: column;
  border-radius: 12px;
  margin-left: 5px;
  background-color: aliceblue;
  width: 500px;
}
li {
  border: 0.5px solid gray;
  padding: 15px;
}
li:hover {
  cursor: pointer;
  background-color: bisque;
}
h3 {
  text-align: center;
  margin-bottom: 15px;
}
</style>
