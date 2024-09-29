<script setup>
  const { itemName } = defineProps(['itemName']);
</script>
<template>
  <div class="item">
    {{  itemName  }}
  </div>
</template>
<style>
  .item {
    border: 1px solid rgb(219, 56, 159);
    padding: 10px 15px;
    margin: 0 5px 5px;
    border-radius: 3px;
    background-color: rgb(219, 56, 159);
    color: white;
    font-size: 150%;
    font-weight: bold;
  }
</style>