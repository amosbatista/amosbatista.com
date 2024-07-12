<script setup lang="ts">
  
  import { onMounted, ref } from 'vue'
  import vis from 'vis';
  import { Graph } from '@/vis/graph.js'

  let container, theChart, nodesDataSet, edgesDataSet;
  
  const newLabel = ref('');
  const exported = ref('')
  const graphData = ref({})

  const currentSelected = ref(0);
  const newId = ref(0);

  const nodes = [{
    id: 1,
    label: 'Joyce',
    "x": 1,
    "y": 2
  }, {
    id: 2,
    label: 'Becky',
    "x": 3,
    "y": 5
  }, {
    id: 4,
    label: 'Jacob',
    "x": 6,
    "y": 6
  }, {
    id: 5,
    label: 'Anna',
    "x": 10,
    "y": 5
  }];

  const edges = [{
    from: 1,
    to: 2,
    value: 1
  }, {
    from: 4,
    to: 1,
    value: 1
  }, {
    from: 5,
    to: 1,
    value: 1
  }]

 let graph = new Graph(edges, nodes)
 graphData.value = graph.get()

  const getPosition = () => {
    const stateFrom = graphData.value as IVis
    const graph = new Graph(stateFrom.edges, stateFrom.nodes)
    const newPositions = { nodes: theChart.getPositions() }
    graph.updatedCoordinatesFromVis(newPositions)
    exported.value = graph.toString();

    
  }

  const getSelected = () => {
    const FIRST_NODE = 0;
    currentSelected.value = theChart.getSelection().nodes[FIRST_NODE] ;
  }

  const addLabel = () => {
    const newNode = {
      id: parseInt(newId.value),
      label: newLabel.value,
      x: 20,
      y: 20,
    }
    graph.addNodeFromAnother(newNode, currentSelected.value)
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
    useState('graphData');

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
    <button type="button" @click="getPosition()">show current position nodes</button>
    <button type="button" @click="getSelected()">show current selected</button>
    <button type="button" @click="addLabel()">add</button>

    ID: <input v-model="currentSelected">
    NewId: <input v-model="newId">
    Label: <input v-model="newLabel">

    <textarea v-model="exported"></textarea>
  </form>
</template>

<style>
  .graph {
    width: 95%;
    border: 1px solid red;
    margin: 20px auto;
  }
</style>../../vis/codigo/graph