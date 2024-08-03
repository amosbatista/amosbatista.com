



<script setup>
  import vis from 'vis';

  const propsss = defineProps(['nodes', 'edges']);

  const nodesDataSet = new vis.DataSet(propsss.nodes.value);
  const edgesDataSet = new vis.DataSet(propsss.edges.value);

  let theChart;

  onMounted(() => {
    edgesDataSet.update(propsss.edges)
    nodesDataSet.update(propsss.nodes)


    const container = document.getElementById("graphContainer");

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
</template>


<style>
  .graph {
    width: 95%;
    height: 500px;
    border: 1px solid red;
    margin: 20px auto;
  }
</style>