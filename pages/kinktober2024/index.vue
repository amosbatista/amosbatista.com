<script setup>
  const list = [
    'manso',
    'câmera',
    'frio',
    'veia',
    'friso',
    'amassar',
    'culpado',
    'erguer',
    'asas',
    'brilho',
    'engasgar',
    'canalha',
    'sabonete',
    'bota',
    'caça',
    'umbigo',
    'formal',
    'vermelho',
    'demônio',
    'passade',
    'banho',
    'decente',
    'praia',
    'instigar',
    'palma',
    'noite',
    'colega',
    'faca',
    'aconchegar',
    'despudorar'
  ]
</script>
<template>
  <h1>kinktober 2024</h1>

  <div class="the-zone">
    <kinktober-item
      v-for="(palavra, index) in list" :itemName="(index + 1) + ' - ' + palavra">
    </kinktober-item>
  </div>
</template>

<style>
  .the-zone {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

  }
</style>