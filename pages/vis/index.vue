<script setup lang="ts">
  
  import { onMounted, reactive } from 'vue'
  import vis from 'vis';
  import { Graph } from './api/graph';

  let container, theChart;
  const formState = reactive({
    newLabel: '',
    newId: 0,
    exported: ''
  });

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
    to: 2
  }, {
    from: 4,
    to: 1
  }, {
    from: 5,
    to: 1
  }]

 const graph = new Graph(edges, nodes)
 useState('graphData', () => (graph.get()))

  const getPosition = (state) => {
    const stateFrom = useState('graphData').value as IVis
    const graph = new Graph(stateFrom.edges, stateFrom.nodes)
    const newPositions = { nodes: theChart.getPositions() }
    graph.updatedCoordinatesFromVis(newPositions)
    state.exported = graph.toString();
  }

  const getSelected = (state) => {
    const stateFrom = useState('graphData').value as IVis
    const graph = new Graph(stateFrom.edges, stateFrom.nodes)
    debugger
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
      let nodesDataSet = new vis.DataSet(dataToGraph.nodes);
      theChart = null;
      
      theChart = new vis.Network(container, {
        nodes: nodesDataSet,
        edges: new vis.DataSet(dataToGraph.edges)
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
  <form :state="formState">
    <button type="button" @click="getPosition(formState)">show current position nodes</button>
    <button type="button" @click="getSelected(formState)">show current selected</button>

    ID: <input :value="formState.newId">
    Label: <input :value="formState.newLabel">

    <textarea :value="formState.exported"></textarea>
  </form>
</template>

<style>
  .graph {
    width: 95%;
    border: 1px solid red;
    margin: 20px auto;
  }
</style>