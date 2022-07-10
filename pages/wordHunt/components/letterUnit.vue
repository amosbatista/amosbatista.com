<template>
  <span class="letter">
    {{ letter.trim().substr(0, 1)}}
  </span>
</template>

<script>
  export default {
    props: {
      letter: {
        default: ''
      }
    }
  
  }
</script>

<style>
  .letter {
    font-size: 150%;
  }
</style>