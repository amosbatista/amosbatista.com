<script setup>
  const exported = ref('');

  const loadToGraph = () => {
    const graph = theGraph();

    if(exported.value) {
      const toUpdate = JSON.parse(exported.value);
      graph.value = toUpdate

      useCookie('the-graph', { 
        default: () => (exported.value)});
    }
    else {
      useCookie('the-graph', { 
        default: () => (graph.value)});
    }
    
    
    return navigateTo('vis/edit')
    

  }
</script>

<template>
  <form>
    <h1>Editor de grafos.</h1>
    <p>Por favor, insira o JSON do grafo abaixo:</p>
    <textarea v-model="exported"></textarea>
    <button type="button" @click="loadToGraph()">Carregar grafo</button>
  </form>
</template>

<style>
  form {
    width: 85%;
    margin: 50px auto;
  }
  h1, p {
    text-align: center;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
</style>