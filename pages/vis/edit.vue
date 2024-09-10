<script setup>
  

  import { Graph } from '@/vis/graph'

  const nodeEdit = {
    isSelectingNode: ref(false),
    label: '',
    description: '',
    id: 0,
    selectedNode: ref({}),
    isAddingNode: ref(false)
  }
  
  let graph;
  const nodesLocal = ref([])
  const edgesLocal = ref([])

  const graphFromSave = theGraphSave().value;

  if (!graphFromSave.data) {
    graph = new Graph();
    
    nodesLocal.value = graph.getNodes();
    edgesLocal.value = graph.getEdges();
  }
  else {
    nodesLocal.value = theGraphSave().value.data.nodes;
    edgesLocal.value = theGraphSave().value.data.edges;

    graph = new Graph(edgesLocal.value, nodesLocal.value);
  }

  const loadGraphData = (fromState, fromCookie) => {
    
    if(fromState.value.name !== '') {
      fromState.value = fromCookie.value;
    }
  }

  const persistGraphData = (fromState, fromCookie) => {
    fromCookie.value = fromState.value;
  }

  const unselectedNode = () => {
    unselectedNodeMode();
  }

  const showNodeEdit = (nodesToEdit) => {
    selectNodeMode();
    nodeEdit.selectedNode.value = nodesToEdit;
  }

  const updateState = async (graphState, graphCookie) =>{
    graphState.value.data.nodes = graph.getNodes();
    graphState.value.data.edges = graph.getEdges();
    nodesLocal.value = graph.getNodes();
    edgesLocal.value = graph.getEdges();
    graphCookie.value = graphState.value;
    await update
    
  }

  const addNode = () => {
    addNodeMode();

    nodeEdit.label = '';
    nodeEdit.description = '';
  }

  const addNodeMode = () => {
    nodeEdit.isAddingNode.value = true;
    nodeEdit.isSelectingNode.value = false;
  }

  const selectNodeMode = () => {
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isSelectingNode.value = true;
  }

  const unselectedNodeMode = () => {
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isAddingNode.value = false;
  }
  
  const addThisNodeToGraph = () => {
    graph.addNodeFromAnother({
      description: nodeEdit.description,
      id: 0,
      label: nodeEdit.label,
      x: 0,
      y: 0,
    }, nodeEdit.selectedNode.value)
    

    updateData();
    
    unselectedNode();
  }

  const updateDataFromGraph = (newPositions) => {
    graph.updatedCoordinatesFromVis(newPositions);

    updateData();
  }

  const updateData = () => {
    updateState(theGraph(), theGraphSave());
    persistGraphData(theGraph(), theGraphSave());
  }

  loadGraphData(theGraph(), theGraphSave());
  updateState(theGraph(), theGraphSave());
  unselectedNodeMode();
</script>

<template>
  <div class="edit-graph">
    <div class="the-graph">

      <TheGraph
        :nodes="nodesLocal"
        :edges="edgesLocal"
        @selected-node-event="showNodeEdit"
        @no-node-event="unselectedNode"
        @graph-position-edit-event="updateDataFromGraph"
        ></TheGraph>
      </div>
      <form 
        class="the-graph-form node-edit">

        <div v-show="nodeEdit.isSelectingNode.value">
          <button type="button" @click="editNode()">Editar nó selecionado</button>
          <button type="button" @click="addNode()">Adicionar à partir do nó selecionado</button>
        </div>

        <div v-show="nodeEdit.isAddingNode.value">
          <div class="form-group">
            <p>Nome:</p>
            <input v-model="nodeEdit.label">
          </div>
          <div class="form-group">
            <p>Descrição</p>
            <textarea v-model="nodeEdit.description"></textarea>
          </div>

          <button type="button" @click="addThisNodeToGraph()">Adicionar este nó no grafo</button>
          <button type="button" @click="unselectedNode()">Cancelar</button>
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