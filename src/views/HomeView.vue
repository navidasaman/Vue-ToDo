
<template>
  <main>
    <h1 class="heading">Tasklist.</h1>
    <ToDoData class="taskList" />
  </main>
</template>

<script setup lang="ts">
  import ToDoData from '@/components/ToDoData.vue'; 
</script>

<style scoped>
.heading {
  font-weight: 200;
  color: #3D52A0;
  text-decoration: 1px solid #3D52A0 line-through;
}

main {
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center;
  padding: 20px;  
}

.taskList {
  width: 100%;
  max-width: 80vw; 
  border-radius: 10px; 
  padding: 15px;
  background-color: whitesmoke;
  box-shadow: 5px 2px 2px grey;
  overflow-y: auto;
}
</style>