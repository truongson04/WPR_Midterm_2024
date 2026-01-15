<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <h1>Details of the product{{ route.params.id }}</h1>
  <h1>Path of the products{{ route.path }}</h1>
</template>
