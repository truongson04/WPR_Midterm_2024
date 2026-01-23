<script setup>
import { onMounted, ref } from "vue";
import Story from "./Story.vue";

const inputRef = ref(null);
const divContainer = ref(null);
onMounted(() => {
  inputRef.value.focus();
});
const scrollToTop = () => {
  divContainer.value.scrollTop = 0;
};
const showInput = ref(true);
</script>
<template>
  <div class="container" ref="divContainer">
    <input placeholder="Say something..." ref="inputRef" v-if="showInput" />
    <button @click="showInput = !showInput">
      {{ showInput ? "Hide input" : "Show input" }}
    </button>
    <Story />
    <!--chứa nội dung để test tính năng scroll -->
    <button @click="scrollToTop" class="to-top">Scroll to top</button>
  </div>
</template>
<style scoped>
.container {
  overflow: scroll;
  height: 300px;

  border: 5px dashed orange;
}
pre {
  margin-left: 500px;
}
.container input {
  margin-top: 15px;
  margin-left: 30px;
  padding: 5px;
}
.container button {
  padding: 5px;
  background-color: bisque;
  cursor: pointer;
}
.to-top {
  margin-left: 30px;
}
</style>
