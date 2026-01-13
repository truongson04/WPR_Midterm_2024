<script setup>
import { Card } from "ant-design-vue";
import Child from "./Child.vue";
import { ref } from "vue";
const title = "This is the title from the parents";
const msgReceived = ref("");
const handleMsg = (msg) => {
  console.log("Submitted from children");
  msgReceived.value = msg;
};
</script>
<template>
  <Card class="parents-container">
    <h1>Parents</h1>
    <p v-if="msgReceived" class="message">
      Submitted from children : {{ msgReceived }}
    </p>
    <Child :title="title" @send-to-parents="handleMsg">
      <template v-slot:slot-child="slotProps">
        <span
          style="
            background-color: orange;
            color: white;
            display: inline-block;
            padding: 15px;
            font-weight: 600;
          "
        >
          Slot
          <p v-if="slotProps">text from clhidren :{{ slotProps.text }}</p>
        </span>
      </template>
    </Child>
  </Card>
</template>
<style>
.parents-container {
  background-color: aqua;
  width: 60%;
  border: 1px solid black;
  padding-top: 15px;
  border-radius: 15px;
}
.child-container {
  background-color: pink;
  width: 60%;
  border: 5px solid black;
}
.child-container .props-text {
  font-size: 14px;
}
.child-container .props-text .props-value {
  background-color: green;
  display: inline-block;
  border-radius: 15px;
  padding: 10px;
}
.child-container button {
  background-color: blue;
  color: white;
  font-weight: bold;
  padding: 15px;
  border-radius: 15px;
}
.child-container button:hover {
  background-color: rgb(173, 29, 53);
}
.message {
  background-color: greenyellow;
  padding: 10px;
  font-weight: bold;
}
.child-container .slot-container {
  border: 1px solid black;
  margin-top: 15px;
  background-color: rgb(228, 186, 193);
}
</style>
