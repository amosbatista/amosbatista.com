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
  
  let graph, nodes, edges;

  const graphFromSave = theGraphSave().value;

  if (!graphFromSave.data) {
    graph = new Graph();
    
    nodes = graph.getNodes();
    edges = graph.getEdges();
  }
  else {
    nodes = theGraphSave().value.data.nodes;
    edges = theGraphSave().value.data.edges;

    graph = new Graph(edges, nodes);
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
    }, selectedNode)
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
          <input v-model="nodeEdit.label">
          <button @click="editNode()">Editar nó selecionado</button>
          <button @click="addNode()">Adicionar à partir do nó selecionado</button>
        </div>

        <div v-show="nodeEdit.isAddingNode.value">
          <p>Nome: {{ nodeEdit.isAddingNode.value }}</p>
          <input v-model="nodeEdit.label">

          <p>Descrição</p>
          <textarea v-model="nodeEdit.description"></textarea>

          <button @click="addThisNodeToGraph()">Adicionar este nó no grafo</button>
          <button @click="cancelAdd()">Cancelar e desselecionar</button>
        </div>

      </form>

  </div>
</template>
