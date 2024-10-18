<template>
  <div>
    <NavBar />
    <RouterView v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;  
  transform: translateX(100px);
}
.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>