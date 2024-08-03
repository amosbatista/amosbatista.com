<script setup lang="ts">
  

  import { Graph } from '@/vis/graph.js'


  const graphState = theGraph();

  const nodes = graphState.value.data.nodes;
  const edges = graphState.value.data.edges;

  let graph = new Graph(edges, nodes)
  
</script>

<template>
  <div>
    <TheGraph :nodes="nodes" :edges="edges"></TheGraph>
  </div>
</template>
