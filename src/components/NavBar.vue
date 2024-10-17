<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
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
}

a,
.green {
  text-decoration: none;
  color: whitesmoke;
  transition: 0.4s;
  padding: 3px;
  
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline 5px dotted;
}
</style>
