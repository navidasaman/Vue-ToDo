<template>
  <div class="about">
    <h1>about.</h1>
    <p>
      This vue app was created with the purpose of experimenting with the Composition API 
      in relation to previous application made with Options API
    </p>
  </div>
</template>

<style scoped>
  .about {
    padding:50px;
    color:#3D52A0;
    width:30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    background-color: whitesmoke;
    padding:20px;
    border-radius: 10px;
    margin-top: 50px;
    box-shadow: 1px 2px 2px grey;
  }

  @media screen and (max-width: 800px) {
    .about {
      width:100vw;
      max-width: 80%;
    }  
  }
</style>