<script setup>
import { Button, Card } from "ant-design-vue";

const props = defineProps(["title"]);
const emit = defineEmits(["send-to-parents"]);
const sendParents = (msg) => {
  emit("send-to-parents", msg);
};
</script>
<template>
  <Card class="child-container">
    <h2>Child</h2>
    <h3 class="props-text">
      <span class="props-value">{{ props.title }}</span>
    </h3>
    <button @click="sendParents(`hello`)">Submit</button>
    <div class="slot-container">
      <h3>Slot from parents</h3>
      <slot name="slot-child" text="ok"></slot>
    </div>
  </Card>
</template>
