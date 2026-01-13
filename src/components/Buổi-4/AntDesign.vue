<script setup>
import { Button, Switch } from "ant-design-vue";
import Card from "ant-design-vue/es/card/Card";
import { onMounted, ref } from "vue";
const isLoad = ref(true);
const changeLoad = () => {
  isLoad.value = !isLoad.value;
};
onMounted(()=>{

})
</script>
<template>
  <a-switch v-model:checked="isLoad" />
  <Card
    :loading="isLoad"
    style="width: 300px; height: 500px"
    title="Title"
    description="Stop being sleepy"
  >
    <Button type="primary"> click me</Button>
  </Card>
</template>
