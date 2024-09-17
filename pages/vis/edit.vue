<script setup>
  

import { generateCoordinatesFromNeighbour } from '~/composables/Graph/generateCoordinatesFromNeighbour';
import { getLastNodeId } from '~/composables/Graph/getLastId';
import { getNodeById } from '~/composables/Graph/getNodeById';
import { updatedCoordinatesFromVis } from '~/composables/Graph/updatedCoordinatesFromVis';

  const nodeEdit = {
    isSelectingNode: ref(false),
    label: '',
    description: '',
    id: 0,
    selectedNode: ref({}),
    isAddingNode: ref(false),
    isEditingNode: ref(false),
    isInitialState: ref(false)
  }

  let exported = ref('')
  
  let nodesLocal 
  let edgesLocal 

  const graphFromSave = theGraph().value;

  if (!graphFromSave.data) {  
    nodesLocal = ref([{
      id: 1,
      description: '',
      label: '',
      x: 0,
      y: 0
    }]);
    edgesLocal = ref([]);
  }
  else {
    nodesLocal = ref(theGraph().value.data.nodes);
    edgesLocal = ref(theGraph().value.data.edges);
  }

  const loadGraphData = (_fromState) => {
    
    /*if(fromState.value.name !== '') {
      fromState.value = fromCookie.value;
    }*/
  }

  const persistGraphData = (_fromState, _fromCookie) => {
    //fromCookie.value = fromState.value;
  }

  const unselectedNode = () => {
    unselectedNodeMode();
  }

  const showNodeEdit = (nodesToEdit) => {
    selectNodeMode();
    nodeEdit.selectedNode.value = nodesToEdit;
  }

  const updateState = async (graphState) =>{
    graphState.value.data.nodes = nodesLocal
    graphState.value.data.edges = edgesLocal
    // graphCookie.value = graphState.value;
    // refreshCookie('the-graph')
  }

  const addNode = () => {
    addNodeMode();

    nodeEdit.label = '';
    nodeEdit.description = '';
  }

  const editNode = () => {
    editNodeMode();

    const nodeSelected = getNodeById(nodesLocal, nodeEdit.selectedNode.value);
    nodeEdit.label = nodeSelected.label;
    nodeEdit.description = nodeSelected.id;
  }

  const editNodeMode = () => {
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isEditingNode.value = true;
    nodeEdit.isInitialState.value = false;
  }

  const addNodeMode = () => {
    nodeEdit.isAddingNode.value = true;
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = false;
  }

  const selectNodeMode = () => {
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isSelectingNode.value = true;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = false;
  }

  const unselectedNodeMode = () => {
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = true;
  }
  
  const addThisNodeToGraph = () => {
    const newNodeId = getLastNodeId(nodesLocal).id + 1;
    const nodeNeighbour = getNodeById(nodesLocal, nodeEdit.selectedNode.value);
    const newNodeCoordinates = generateCoordinatesFromNeighbour(nodeNeighbour);

    nodesLocal.value.push({
      id: newNodeId,
      x: newNodeCoordinates.x,
      y: newNodeCoordinates.y,
      description: nodeEdit.description,
      label: nodeEdit.label,
    });

    edgesLocal.value.push({
      from: newNodeId,
      to: nodeEdit.selectedNode.value,
      id: undefined,
      value: 1
    });

    updateData();
    
    unselectedNode();
  }

  const saveThisNode = () => {
    const node = getNodeById(nodesLocal, nodeEdit.selectedNode.value);
    
    node.label = nodeEdit.label;
    node.description = nodeEdit.description;

    updateData();
    unselectedNode();
  }

  const updateDataFromGraph = (newPositions) => {
    updatedCoordinatesFromVis(nodesLocal, newPositions);

    updateData();
  }

  const updateData = () => {
    updateState(theGraph());
    persistGraphData(theGraph());
  }

  const exportToTxt = () => {
    exported.value = JSON.stringify(theGraph().value.data)
  }

  

  loadGraphData(theGraph());
  updateState(theGraph());
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

        <div v-show="nodeEdit.isInitialState.value">
          <button type="button" @click="exportToTxt()">Exportar grafo para texto</button>
          <textarea v-model="exported"></textarea>
        </div>

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

          <button type="button" @click="unselectedNode()">Cancelar</button>
          <button type="button" @click="addThisNodeToGraph()">Adicionar este nó no grafo</button>
        </div>


        <div v-show="nodeEdit.isEditingNode.value">
          <div class="form-group">
            <p>Nome:</p>
            <input v-model="nodeEdit.label">
          </div>
          <div class="form-group">
            <p>Descrição:</p>
            <textarea v-model="nodeEdit.description"></textarea>
          </div>

          <button type="button" @click="unselectedNode()">Cancelar</button>
          <button type="button" @click="saveThisNode()">Salvar edição do nó</button>
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