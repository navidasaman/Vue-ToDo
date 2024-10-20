<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  padding: 10px; 
  background-color: #8697C4;
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 1px 2px 2px grey;
}

a {
  text-decoration: none;
  color: whitesmoke;
  transition: 0.3 ease-in-out;
  padding: 3px;
}

nav a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 5px dotted; 
}
</style>
