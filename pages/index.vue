<template>
  <div class="main">
    <div class="text-center">
      <h1>amosbatista.com</h1>
      <RouterLink to="/vis"><p>Generator - vis</p></RouterLink>
      <RouterLink to="/sound"><p>Sound Generator - Game of Life</p></RouterLink>
      <a :href="'mailto:amos.silva@gmail.com'"><p>amos.silva@gmail.com</p></a>
    </div>
  </div>
</template>
<style>
  .main{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  .text-center {
    text-align: center;
  }
</style>