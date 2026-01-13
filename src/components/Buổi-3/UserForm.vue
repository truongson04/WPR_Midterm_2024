<script setup>
import { computed, ref } from "vue";

const user = ref({
  firstName: "Daniel",
  lastName: "Ngô Gia",
});
const getFullName = computed(() => {
  return user.value.firstName + " " + user.value.lastName;
});
</script>
<template>
  <div class="login-form">
    <h1 class="form-title">User Form</h1>
    <form>
      <div class="form-field">
        <label for="firstName">First name: </label>
        <input id="firstName" , name="firstName" v-model="user.firstName" />
      </div>
      <div class="form-field">
        <label for="lastName">Last name: </label>
        <input id="lastName" , name="lastName" v-model="user.lastName" />
      </div>
    </form>
    <h3 class="result-container">
      Your full name is <span class="result">{{ getFullName }}</span>
    </h3>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  margin: 0px;
  box-sizing: border-box;
  padding: 0px;
  font-family: "Poppins", sans-serif;
}
.login-form {
  width: 400px;
  height: 50%;
  border-radius: 10px;
  padding: 177px, 90px, 33px, 85px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.form-title {
  font-size: 24px;
  padding-top: 30px;
  padding-bottom: 54px;
  text-align: center;
  color: black;
}
form {
  position: relative;
}
form .form-field {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 30px;
}
form .form-field label {
  color: black;
  font-weight: 600;
}
form .form-field input {
  font-family: Poppins-Medium;
  font-size: 15px;

  color: #666666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
}
form .form-field input:focus {
  border: 1px solid bisque;
}
.result-container {
  width: 80%;
  padding-left: 30px;
  margin: 0 auto;
  width: 70%;
  margin-right: 100px;
}
.result-container .result {
  display: block;
  background-color: bisque;
  padding: 10px;
  border-radius: 25px;
  color: red;
  margin-top: 10px;
  width: 100%;
}
</style>
