<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <h3>Searching ....{{ route.query.key }}</h3>
</template>
