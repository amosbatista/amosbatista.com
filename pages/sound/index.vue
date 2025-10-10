<template>
  <div class="main">
    <div class="text-center">
      <h1> <RouterLink to="/">amosbatista.com</RouterLink> - sound generators</h1>
      <div>
        <h2>based in Conway's Game of Life</h2>
        <RouterLink to="/sound/v1"><p>v1</p></RouterLink>
        <RouterLink to="/sound/toneJs"><p>toneJs</p></RouterLink>
        <RouterLink to="/sound/prod3"><p>prod3 (toneJs with 2 predefs) </p></RouterLink>
        <RouterLink to="/sound/oscFarm"><p>oscFarm (toneJs) </p></RouterLink>
      </div>
      <div>
        <h2>others</h2>
        <RouterLink to="/sound/fromTo"><p>Two Notes Oscillator (toneJs) </p></RouterLink>
        <a :href="'mailto:amos.silva@gmail.com'"><p>amos.silva@gmail.com</p></a>
      </div>
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