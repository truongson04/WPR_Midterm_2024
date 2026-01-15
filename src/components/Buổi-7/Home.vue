<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <h1>Home page</h1>
  <router-view></router-view>
  <button @click="router.push('/about')">Go to about</button>
  <button @click="router.push('/child')">Go to child</button>
</template>
