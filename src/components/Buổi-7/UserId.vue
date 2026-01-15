<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const props = defineProps(["users"]);

const user = props.users.find((items) => {
  return items.id === parseInt(route.params.id);
});
</script>
<template>
  <h3
    @click="
      router.push({
        name: 'UserId',
        query: {
          from: 'list',
        },
      })
    "
  >
    This is user: {{ route.params.id }}
  </h3>
  <p v-if="route.query.from">{{ route.query.from }}</p>
</template>
<style scoped>
h3:hover {
  cursor: pointer;
}
</style>
