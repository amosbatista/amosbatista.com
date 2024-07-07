<script setup>
  import { onMounted } from 'vue'
  import vis from 'vis';

  let container, theChart;
  const getPosition = () => {
    console.log('foo', theChart.getPositions())
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
      nodes: [{
        "id":1,
        "label":"becky",
        "fixed": false,
        "physics": false,
        "x": 1,
        "y": 1
      },{
        "id":2,
        "label":"joyce",
      }],
        edges: [{"from":2,"to":1,"value":1}]
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
  <form>
    <button type="button" @click="getPosition()">show current position nodes</button>
  </form>
</template>

<style>
  .graph {
    width: 95%;
    border: 1px solid red;
    margin: 20px auto;
  }
</style>