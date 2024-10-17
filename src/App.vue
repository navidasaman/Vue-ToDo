<template>
  <div class="encapsulate">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
</script>

<style scoped>

.encapsulate{
  width:100vw;
  letter-spacing: 4px;
}
</style>
