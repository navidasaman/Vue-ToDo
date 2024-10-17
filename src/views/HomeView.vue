
<template>
  <main>
    <ToDoData class="taskList" />
  </main>
</template>

<script setup>
  import ToDoData from '../components/ToDoData.vue'; 
</script>

<style scoped>
main {
  flex: 1; /* Allow main to take remaining space */
  display: flex; /* Make sure contents are displayed in a row */
  flex-direction: column; /* Stack task list vertically */
  justify-content: flex-start; /* Align to the top */
  align-items: center; /* Center contents horizontally */
  padding: 20px; /* Add padding to the main content */
  text-align: center;
  
}

.taskList {
  width: 100%; /* Ensure the task list takes full width */
  max-width: 80vw; /* Set a max width for better layout */
  background-color: white; /* Background color for task list */
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Inner padding */
  background-color: whitesmoke;

}
</style>