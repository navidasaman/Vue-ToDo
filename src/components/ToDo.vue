<template>
  <div>
    <div class="adding">
      <input v-model="newTask" placeholder="New task" />
      <button class="addButton" @click="addTaskHandler">✓</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <span class="task-text">{{ task }}</span>
        <button class="deleteButton" @click="() => deleteTaskHandler(index)">X</button>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref, defineProps } from 'vue';

// Props recieving from the parent component ToDoData.vue
const props = defineProps({
  addTask: Function, 
  deleteTask: Function,
  tasks: Array,
});

// To create a new state (think as useState in react)
const newTask = ref('');

const addTaskHandler = () => {
  if (newTask.value.trim() !== '') {
    props.addTask(newTask.value); // Call the addTask method in ToDoData.vue parent component
    newTask.value = ''; // Clears the input field
  }
};

const deleteTaskHandler = (index) => {
  props.deleteTask(index); // Call the deleteTask method in ToDoData.vue parent component
};
</script>
<style scoped>
ul {
  color: black;
  padding: 0; 
  list-style-type: none; 
}

.adding {
  display: flex;
}

.addButton {
  padding: 6px;
  background-color: aquamarine;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
  height:100%
}

.task-item {
  display: flex;
  justify-content: space-between; 
  padding: 10px; 
  text-align:left;
  color:#3D52A0;
}

li:nth-child(odd) {
  background-color: #adbbda65;
}

li:nth-child(even) {
  background-color: #f2f2f2;
}

.deleteButton {
  background-color: rgba(255, 0, 0, 0.327);
  border: none;
  border-radius: 5px;
  padding:5px;
  padding-left: 15px;
  padding-right: 15px;
}

input {
  padding: 5px;
  margin-bottom: 10px; /* Space between input and task list */
  width: calc(100% - 60px); /* Adjust width to fit the container */
  text-align: center;
}
</style>