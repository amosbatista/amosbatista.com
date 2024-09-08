<script setup>
  const graphFromCookie = theGraphSave().value;

  const exported = ref(JSON.stringify(graphFromCookie.data));
  const name = ref(graphFromCookie.name);
  

  const loadToGraph = () => {
    const graph = theGraph();

    if(exported.value) {
      const toUpdate = JSON.parse(exported.value);
      graph.value = toUpdate;

      theGraphSave().value = {
        name: name.value,
        data: toUpdate
      }

      
    }
    else {
      useCookie('the-graph', { 
        default: () => (graph.value)});
    }
    
    
    return navigateTo('./vis/edit')
    

  }
</script>

<template>
  <form>
    <h1>Editor de grafos.</h1>
    <div class="form-group name">
      <span>Nome do grafo:</span>
      <input v-model="name"/>
    </div>
    <div class="form-group">
      <p>Por favor, insira o JSON do grafo abaixo:</p>
      <textarea v-model="exported"></textarea>
    </div>
    <button type="button" @click="loadToGraph()">Carregar grafo</button>
  </form>
</template>

<style>

  form {
    width: 85%;
    margin: 50px auto;
  }
  .name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
  h1, p {
    text-align: center;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
</style>