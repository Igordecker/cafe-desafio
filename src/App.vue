<script setup>
import {RouterView} from 'vue-router'
import AppHeader from './components/Layout/AppHeader.vue';
import AppFooter from './components/Layout/AppFooter.vue';
</script>
<template>
  <div class="app-container">
    <AppHeader></AppHeader>
  <RouterView />
  <AppFooter></AppFooter>
  </div>
</template>
<style scoped>
div.app-container{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
}
</style>
