<script setup>
  

  const theArray = useState('theArray', () => ([1, 2, 3, 4, 5]));
</script>

<template>
  <div class="area">
    <span v-for="el in theArray">
      {{ el }}
    </span>
  </div>
</template>