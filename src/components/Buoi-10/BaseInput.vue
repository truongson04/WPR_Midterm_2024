<script setup>
const props = defineProps(["dataType"]);
const model = defineModel();
</script>
<template>
  <input :type="props.dataType" v-model.lazy="model" :name="props.dataType" />
</template>
