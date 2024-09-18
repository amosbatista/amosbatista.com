<script setup>
  

import { deleteEdge } from '~/composables/Graph/deleteEdge';
import { deleteEdgesOfNode } from '~/composables/Graph/deleteEdgesOfNode';
import { deleteNode } from '~/composables/Graph/deleteNode';
import { generateCoordinatesFromNeighbour } from '~/composables/Graph/generateCoordinatesFromNeighbour';
import { getEdgeByNodes } from '~/composables/Graph/getEdgeByNodes';
import { getLastNodeId } from '~/composables/Graph/getLastId';
import { getNodeById } from '~/composables/Graph/getNodeById';
import { updatedCoordinatesFromVis } from '~/composables/Graph/updatedCoordinatesFromVis';
import { updateEdge } from '~/composables/Graph/updateEdge';

  const nodeEdit = {
    isSelectingNode: ref(false),
    label: '',
    description: '',
    id: 0,
    selectedNode: ref({}),
    selectedAnotherNode: ref({}),
    isAddingNode: ref(false),
    isEditingNode: ref(false),
    isInitialState: ref(false),
    isEditingEdge: ref(false),
    isAddingEdge: ref(false),
    edgeText: ref('')
  }

  let exported = ref('')
  
  let nodesLocal 
  let edgesLocal 
  let nodesIdForEdge
  let selectedEdge

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
    nodeEdit.selectedNode.value = null;
    unselectedNodeMode();
  }

  const showNodeEdit = (nodesToEdit) => {
    nodeEdit.selectedNode.value = nodesToEdit;
    selectNodeMode();
  }

  const showEdgesEdit = (nodesEdges) => {
    const maybeEdge = getEdgeByNodes(
      edgesLocal,
      getNodeById(nodesLocal, nodesEdges.nodes[0]),
      getNodeById(nodesLocal, nodesEdges.nodes[1])
    )

    nodesIdForEdge = [
      nodesEdges.nodes[0],
      nodesEdges.nodes[1]
    ]

    if(maybeEdge) {
      selectedEdge = maybeEdge
      nodeEdit.edgeText = maybeEdge.label;
      editingEdgeMode();

      return;
    }

    nodeEdit.edgeText = '';
    addingEdgeMode();
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
    nodeEdit.isEditingEdge.value = false;
    nodeEdit.isAddingEdge.value = false;
  }

  const addNodeMode = () => {
    nodeEdit.isAddingNode.value = true;
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = false;
    nodeEdit.isEditingEdge.value = false;
    nodeEdit.isAddingEdge.value = false;
  }

  const selectNodeMode = () => {
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isSelectingNode.value = true;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = false;
    nodeEdit.isEditingEdge.value = false;
    nodeEdit.isAddingEdge.value = false;
  }

  const unselectedNodeMode = () => {
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = true;
    nodeEdit.isEditingEdge.value = false;
    nodeEdit.isAddingEdge.value = false;
  }

  const editingEdgeMode = () => {
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = false;
    nodeEdit.isEditingEdge.value = true;
    nodeEdit.isAddingEdge.value = false;
  }

  const addingEdgeMode = () => {
    nodeEdit.isSelectingNode.value = false;
    nodeEdit.isAddingNode.value = false;
    nodeEdit.isEditingNode.value = false;
    nodeEdit.isInitialState.value = false;
    nodeEdit.isEditingEdge.value = false;
    nodeEdit.isAddingEdge.value = true;
  }

  const addEdge = () => {
    edgesLocal.value.push({
      from: nodesIdForEdge[0],
      to: nodesIdForEdge[1],
      id: undefined,
      value: 1,
      label: nodeEdit.edgeText
    });

    updateData();
    
    unselectedNode();
  }

  const editEdge = () => {
    selectedEdge.label = nodeEdit.edgeText;
    updateEdge(edgesLocal, selectedEdge);

    updateData();
    
    unselectedNode();
  }

  const delEdge = () => {
    deleteEdge(edgesLocal, selectedEdge.id);
    updateData();
    unselectedNode();
  }

  const delNode = () => {
    deleteEdgesOfNode(edgesLocal, nodeEdit.selectedNode.value[0]);
    deleteNode(nodesLocal, nodeEdit.selectedNode.value[0]);
    updateData();
    unselectedNode();
  }

  const addThisNodeToGraph = () => {
    const newNodeId = getLastNodeId(nodesLocal).id + 1;
    const nodeNeighbour = getNodeById(nodesLocal, nodeEdit.selectedNode.value[0]);
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
      to: nodeEdit.selectedNode.value[0],
      id: undefined,
      value: 1
    });

    updateData();
    
    unselectedNode();
  }

  const saveThisNode = () => {
    const node = getNodeById(nodesLocal, nodeEdit.selectedNode.value[0]);
    
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
        @selected-edges-event="showEdgesEdit"
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
          <button type="button" @click="delNode()">Excluir nó e ligações</button>
        </div>

        <div v-show="nodeEdit.isAddingNode.value">
          <div class="form-group">
            <p>Nome:</p>
            <textarea v-model="nodeEdit.label"></textarea>
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
            <textarea v-model="nodeEdit.label"></textarea>
          </div>
          <div class="form-group">
            <p>Descrição:</p>
            <textarea v-model="nodeEdit.description"></textarea>
          </div>

          <button type="button" @click="unselectedNode()">Cancelar</button>
          <button type="button" @click="saveThisNode()">Salvar edição do nó</button>
        </div>

        <div v-show="nodeEdit.isAddingEdge.value">
          <div class="form-group">
            <p>Texto para a ligação:</p>
            <textarea v-model="nodeEdit.edgeText"></textarea>
          </div>

          <button type="button" @click="unselectedNode()">Cancelar criação de ligação</button>
          <button type="button" @click="addEdge()">Criar ligação entre nós</button>
        </div>

        <div v-show="nodeEdit.isEditingEdge.value">
          <div class="form-group">
            <p>Texto para a ligação:</p>
            <textarea v-model="nodeEdit.edgeText"></textarea>
          </div>

          <button type="button" @click="unselectedNode()">Cancelar edição de ligação</button>
          <button type="button" @click="editEdge()">Editar ligação entre nós</button>
          <button type="button" @click="delEdge()">Excluir ligação</button>
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