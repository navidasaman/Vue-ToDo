<template>
  <div class="notFound">
    <div class="sadFace">☹</div>
    <h1>404 Not Found</h1>
    <div class="info">
      <p>Sorry, The page you're looking for does not exist.</p>
      <p>
        Would you like to go back to the 
        <RouterLink class="homepageRoute" :to="{ name: 'home' }">HomePage?</RouterLink>
      </p>
  </div>
  </div>
  
</template>

<style>
.sadFace{
  font-size: 150px;
}

.notFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
  color: #3D52A0;
}

h1 {
  font-size: xx-large;
}

p {
  margin-top: 0%;
  font-size: medium;
  text-align:center;
  margin:0;
  line-height:2rem;
}

.homepageRoute {
  text-decoration: none;
  border: 1px solid #3D52A0;
  padding:5px;
  background:  #3D52A0;;
  color: white;
  line-height: 4rem;

}

</style>