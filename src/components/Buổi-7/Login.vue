<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Cookies from "js-cookie";
const router = useRouter();
const email = ref("");
const password = ref("");
const user = {
  email: "dangson2376@gmail.com",
  password: "123",
};

const onSubmit = () => {
  if (!email.value || !password.value) {
    window.alert("NOT ENOUGH INFORMATION");
    return;
  }
  if (email.value !== user.email || password.value !== user.password) {
    window.alert(" wrong information");
    return;
  } else {
    Cookies.set("user_token", "abc123xyz", { expires: 7, path: "/" });
  }
  router.push({
    path: "/users",
  });
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <h3>Login</h3>
    <label for="email">Email</label>
    <input name="email" id="email" type="email" v-model="email" />
    <label for="password">Password</label>
    <input name="password" id="password" type="password" v-model="password" />
    <button type="submit">Go</button>
  </form>
</template>
<style scoped>
form {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 10px;
  padding: 15px;
  padding-bottom: 35px;
  background-color: beige;
}
form input {
  height: 25px;
  border-radius: 5px;
}
form h3 {
  text-align: center;
  font-size: 25px;
}
form button {
  padding: 15px;
  border-radius: 15px;
  width: 100px;
  margin: 0 auto;
}
</style>
