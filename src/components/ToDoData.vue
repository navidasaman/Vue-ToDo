<template>
  <ToDo 
    :addTask="addTask" 
    :deleteTask="deleteTask"
    :tasks="tasks" 
  />
</template>

<script setup>
import { ref } from 'vue';
import ToDo from './ToDo.vue';

// Array of preinitialized tasks
const tasks = ref(['Clean', 'Pay bills', 'Do laundry', 'Send E-mail']); 

// Add tasks
const addTask = (task) => { 
  if (task.trim() !== '') { 
    tasks.value.push(task);  
  }
};

// Delete tasks based on index
const deleteTask = (index) => {
  tasks.value.splice(index, 1);  
};
</script>
