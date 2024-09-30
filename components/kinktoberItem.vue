<script setup>
  const { itemName } = defineProps(['itemName', 'index']);
</script>
<template>
  <a class="item" :href="'https://ursal.zone/tags/kinktober2024_dia' + index ">
    {{  itemName  }}
  </a>
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
    text-decoration: none;
  }
  .item:hover {
    text-decoration: underline;
  }
</style>