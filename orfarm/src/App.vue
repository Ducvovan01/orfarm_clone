<script setup>
import { ref, watch } from 'vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isHomePage = ref(route.path === '/');

watch(route, () => {
  isHomePage.value = route.path === '/';
});
</script>

<template>
  <Header :isHomePage="isHomePage"></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer :isHomePage="isHomePage"></Footer>
</template>

<style scoped>
/* CSS cho App */
</style>
