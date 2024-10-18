<template>
  <ToDo 
    :addTask="addTask" 
    :deleteTask="deleteTask"
    :tasks="tasks" 
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ToDo from '@/components/ToDo.vue';

// Array of preinitialized tasks
const tasks = ref<string[]>([]);

// When component mounts task are retrieved from localStorage
onMounted(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); 
  tasks.value = storedTasks; 
});

// Add tasks
const addTask = (task: string): void => { 
  if (task.trim() !== '') { 
    tasks.value.push(task); 
    localStorage.setItem('tasks', JSON.stringify(tasks.value)); 
  }
};

// Delete tasks based on index
const deleteTask = (index: number): void => {
  tasks.value.splice(index, 1);  
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
};
</script>
