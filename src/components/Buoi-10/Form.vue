<script setup>
import { reactive, ref } from "vue";
import BaseInput from "./BaseInput.vue";
const formData = reactive({
  email: "",
  password: "",
});
</script>
<template>
  <form>
    <label>Email: </label>
    <BaseInput data-type="email" v-model.lazy="formData.email" />
    <label>Password: </label>
    <input type="password" v-model.lazy="formData.password" name="password" />
    <button>Submit</button>
  </form>
  <h3>Logged result {{ formData }}</h3>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid black;
  padding: 20px;
  background-color: antiquewhite;
  gap: 10px;
  border-radius: 15px;
  margin: 0 auto;
}
form input {
  height: 35px;
  background-color: rgb(191, 219, 219);
  border-radius: 15px;
  border: none;
}
form input:focus {
  background-color: rgb(201, 176, 176);
}
form button {
  width: 100px;
  padding: 5px;
  background-color: rgb(125, 199, 168);
  border-radius: 15px;
  font-size: 16px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
form button:hover {
  background-color: blue;
  color: white;
  font-weight: bold;
}
h3 {
  margin-top: 30px;
  border: 1px solid black;
  padding: 15px;
  background-color: azure;
}
</style>
