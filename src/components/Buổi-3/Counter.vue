<script setup>
import { computed, reactive, ref, watch } from "vue";
const count = ref(0);
const change = ref("1");
const changeNum = () => {
  change.value = "2";
  console.log(change.value);
};

watch([count, change], (newVal, oldVal) => {
  if (newVal > 5) {
    console.log("Count is high");
  }
});
</script>
<template>
  <div class="count-container">
    <h1>Count :{{ count }}</h1>
    <button
      @click="
        () => {
          count++;
          changeNum();
        }
      "
    >
      +1
    </button>
  </div>
</template>

<style scoped>
.count-container {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 30%;
  padding: 15px;
  background: linear-gradient(45deg, #1a1a2e, #16213e);
  border-radius: 20px;
}
.count-container h1 {
  text-align: center;
  color: #00ff9f;
}
.count-container button {
  padding: 5px;
  width: 100px;
  text-align: center;
  background-color: chartreuse;
  font-size: 15px;
  border-radius: 10px;
  font-weight: bold;
}
.count-container button:hover {
  transform: scale(1.05);
}
</style>
