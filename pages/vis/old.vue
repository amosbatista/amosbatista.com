<script setup lang="ts">
  
  import { onMounted, ref } from 'vue'
  import vis from 'vis';
  import { Graph } from '@/vis/graph.js'

  let container, theChart, nodesDataSet, edgesDataSet;
  
  const newLabel = ref('');
  const exported = ref('')
  
  const currentSelected = ref(0);
  const newId = ref(0);

  const graphState = theGraph();
  const graphCookie = useCookie('the-graph');

  const persistGraphData = (fromState, fromCookie) => {
    
    if(fromState.value.name !== '') {
      fromState.value = fromCookie.value;
    }
  }

  persistGraphData(graphState, graphCookie);

  const nodes = graphState.value.data.nodes;
  const edges = graphState.value.data.edges;

  let graph = new Graph(edges, nodes)


  const updateGraph = () => {
    const newPositions = { nodes: theChart.getPositions() }
    
    graph.updatedCoordinatesFromVis(newPositions)
    updateState()
  }

  const updateState = () =>{
    graphState.value.data.nodes = graph.getNodes();
    graphState.value.data.edges = graph.getEdges();

    exported.value = graph.toString();

    graphCookie.value = graphState.value;
  }

  const getSelected = () => {
    const FIRST_NODE = 0;
    currentSelected.value = theChart.getSelection().nodes[FIRST_NODE] ;
  }

  const addNode = () => {
    const newNode = {
      id: parseInt(newId.value),
      label: newLabel.value,
      x: 20,
      y: 20,
    }
    graph.addNodeFromAnother(newNode, currentSelected.value)
    updateGraph();
    edgesDataSet.update(graph.getEdges())
    nodesDataSet.update(graph.getNodes())
  }

  onMounted(() => {
    container = document.getElementById("graphContainer");
  
    const BASE_NODE =  {
      color:  "#229db3",
      font: {
        size: 10,
      },
      
    };
    const options = { 
      width: "100%",
      height: "100%",
      nodes: BASE_NODE,
      edges: {
        smooth: false,
      },
      physics: {
        enabled: false,
      },
    };

    const dataToGraph = {
      nodes, edges
    }
    nodesDataSet = new vis.DataSet(dataToGraph.nodes);
    edgesDataSet = new vis.DataSet(dataToGraph.edges)
    theChart = null;
      
      theChart = new vis.Network(container, {
        nodes: nodesDataSet,
        edges: edgesDataSet
      }, options);

      theChart.moveTo({
        position: {x:1,y:6},
        scale: 1.5,
        offset: {x:0,y:0}
      })
  })
  
</script>

<template>
  <div class="graph">
    <div id="graphContainer"></div>
  </div>
  <form>
  {{ newLabel }}
    <button type="button" @click="updateGraph()">show current position nodes</button>
    <button type="button" @click="getSelected()">show current selected</button>
    <button type="button" @click="addNode()">add</button>

    ID: <input v-model="currentSelected">
    NewId: <input v-model="newId">
    Label: <input v-model="newLabel">

    <textarea v-model="exported"></textarea>
  </form>
</template>

<style>
  .graph {
    width: 95%;
    height: 500px;
    border: 1px solid red;
    margin: 20px auto;
  }
</style>