<script setup>
import { ref } from "vue";

const id = ref(0);
const keyword = ref("gay");
</script>

<template>
  <div id="nav-bar">
    <router-link to="/">Trang chủ</router-link> |
    <router-link to="/about">Giới thiệu</router-link>
    <router-link
      :to="{
        path: '/details',
        name: 'Details',
        params: {
          id: 123,
        },
      }"
      >Chi tiết
    </router-link>
    <router-link
      :to="{
        path: '/search',
        query: { key: keyword },
      }"
      >Tìm kiếm</router-link
    >
    <router-link
      :to="{
        path: '/:pathMatch(.*)*',
      }"
      >Not found</router-link
    >
  </div>
  <button @click="id++">tăng</button>
  <router-view />
</template>
<style scoped></style>
