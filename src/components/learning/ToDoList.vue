<script setup>
import { ref } from "vue";

console.log("ok");
const taskList = ref([]);
const task = ref("");
const genRandom = () => {
  let random = "";
  for (let i = 0; i < 5; i++) {
    random += Math.floor(Math.random() * 9);
  }
  return random;
};
const addTask = () => {
  if (!task.value) {
    window.alert("Please enter a task");
    return;
  }
  taskList.value = [
    ...taskList.value,
    {
      id: genRandom(),
      content: task.value,
      done: ref(false),
      deleted: ref(false),
    },
  ];
  console.log(taskList.value.slice(-1));
  task.value = "";
};
const deleteTask = (taskId) => {
  if (window.confirm("Do you want to delete the chosen task ?? ")) {
    const changeList = taskList.value.filter((item) => {
      return item.id !== taskId;
    });
    taskList.value = changeList;
  }
};
</script>

<template>
  <div class="container">
    <h3>Things to do :</h3>

    <div class="input-container">
      <input type="text" v-model="task" />
      <button @click="addTask" @keyup.enter="addTask">Add</button>
    </div>
    <ul class="task-container">
      <li v-for="item in taskList" :key="item.id">
        <input type="checkbox" v-model="item.done" /><span
          class="task-content"
          :style="{ textDecoration: item.done ? 'line-through' : 'none' }"
          >{{ item.content }}</span
        >
        <button @click="deleteTask(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  background-color: cyan;
  width: 30%;
  height: 500px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #4b4b4b;
  padding: 3px;
}
.container h3 {
  color: #7d86af;
  font-weight: 600;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  font-size: 25px;
}
.container .input-container {
  z-index: 999;
  position: fixed;
}
.container .input-container input {
  margin-left: 10px;
  border-radius: 10px;
  height: 25px;
  background-color: aliceblue;
}
.task-container {
  margin-top: 80px;
  overflow: auto;
  height: 70%;
  list-style-type: none;
  border: 1px solid white; /* hiện để dễ xem */
}
.task-container li {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 50px;
  margin-bottom: 15px;
  color: paleturquoise;
  font-size: 20px;
  padding-bottom: 3px;
  background-color: #565864;
  border-radius: 5%;
  position: relative;
}
.task-container li button {
  position: absolute;
  left: auto;
  right: 0;
  height: 100%;
  background-color: rgb(126, 9, 9);
  border-radius: 10px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.task-container li button:hover {
  background-color: red;
}
.task-content {
  display: inline-block;
  width: 70%;
  margin-left: 30px;
}
</style>
