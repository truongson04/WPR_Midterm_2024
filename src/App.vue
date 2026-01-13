<script setup>
import { ref } from "vue";
import UserList from "./components/Buổi-6/UserList.vue";
const isShow = ref(true);
// import Hello from './components/Hello.vue';
</script>

<template>
  <button
    @click="
      () => {
        isShow = !isShow;
      }
    "
  >
    {{ isShow ? "Hide" : "Show" }}
  </button>
  <UserList v-if="isShow" />
</template>
<style scoped>
button {
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 15px;
  padding: 15px;
  background-color: aquamarine;
}
</style>
