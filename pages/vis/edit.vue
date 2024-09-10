<script setup>
  

  import { Graph } from '@/vis/graph'

  const nodeEdit = {
    isSelectingNode: false,
    label: '',
    description: '',
    id: 0,
    selectedNode: ref({}),
    isAddingNode: ref(false)
  }
  
  let graph;
  const nodes = ref([])
  const edges = ref([])

  const graphFromSave = theGraphSave().value;

  if (!graphFromSave.data) {
    graph = new Graph();
    
    nodes.value = graph.getNodes();
    edges.value = graph.getEdges();
  }
  else {
    nodes.value = theGraphSave().value.data.nodes;
    edges.value = theGraphSave().value.data.edges;

    graph = new Graph(edges.value, nodes.value);
  }

  const persistGraphData = (fromState, fromCookie) => {
    
    if(fromState.value.name !== '') {
      fromState.value = fromCookie.value;
    }
  }

  const showNodeEdit = (nodesToEdit) => {
    selectNodeMode();
    nodeEdit.selectedNode.value = nodesToEdit;
  }

  const updateState = (graphState, graphCookie) =>{
    graphState.value.data.nodes = graph.getNodes();
    graphState.value.data.edges = graph.getEdges();
    nodes.value = graph.getNodes();
    edges.value = graph.getEdges();

    graphCookie.value = graphState.value;
  }

  persistGraphData(theGraph(), theGraphSave());
  updateState(theGraph(), theGraphSave());

  const addNode = () => {
    addNodeMode();

    nodeEdit.label = '';
    nodeEdit.description = '';
  }

  const addNodeMode = () => {
    nodeEdit.isAddingNode.value = true;
    nodeEdit.isSelectingNode = false;
  }

  const selectNodeMode = () => {
    nodeEdit.isAddingNode.value = true;
    nodeEdit.isSelectingNode = true;
  }
  
  const addThisNodeToGraph = () => {
    graph.addNodeFromAnother({
      description: nodeEdit.description,
      id: 0,
      label: nodeEdit.description,
      x: 20,
      y: 20,
    }, nodeEdit.selectedNode)

    updateState(theGraph(), theGraphSave());
  }
</script>

<template>
  <div class="edit-graph">
    <div class="the-graph">

      <TheGraph
        :nodes="nodes"
        :edges="edges"
        @selected-node-event="showNodeEdit"></TheGraph>
      </div>
      <form 
        class="the-graph-form node-edit">

        <div v-show="nodeEdit.isSelectingNode">
          <button @click="editNode()">Editar nó selecionado</button>
          <button @click="addNode()">Adicionar à partir do nó selecionado</button>
        </div>

        <div v-show="nodeEdit.isAddingNode">
          <div class="form-group">
            <p>Nome:</p>
            <input v-model="nodeEdit.label">
          </div>
          <div class="form-group">
            <p>Descrição</p>
            <textarea v-model="nodeEdit.description"></textarea>
          </div>

          <button type="button" @click="addThisNodeToGraph()">Adicionar este nó no grafo</button>
          <button type="button" @click="cancelAdd()">Cancelar e desselecionar</button>
        </div>

      </form>

  </div>
</template>

<style>
  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
</style>