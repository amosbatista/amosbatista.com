



<script setup>
  import vis from 'vis';

  const { nodes, edges } = defineProps(['nodes', 'edges']);

  const nodesDataSet = new vis.DataSet(nodes);
  const edgesDataSet = new vis.DataSet(edges);

  const EVENT_NODE_SELECTED = 'selectedNodeEvent';
  const EVENT_EDGE_SELECTED = 'selectedEdgesEvent';
  const EVENT_NO_NODE_SELECTED = 'noNodeEvent';
  const EVENT_GRAPH_POSITION_EDIT = 'graphPositionEditEvent';

  const UPDATE_DELAY_MILISECS = 100;


  const emitEvents = defineEmits([
    EVENT_NODE_SELECTED,
    EVENT_EDGE_SELECTED,
    EVENT_NO_NODE_SELECTED,
    EVENT_GRAPH_POSITION_EDIT
  ]);

  let theChart;
  let selectedNodes = [];

  onMounted(() => {
    

    const queueUpdatesOpt = {
      queue: {
        delay: UPDATE_DELAY_MILISECS
      }
    }
    edgesDataSet.setOptions(queueUpdatesOpt)
    nodesDataSet.setOptions(queueUpdatesOpt)

    edgesDataSet.update(edges)
    nodesDataSet.update(nodes)


    const container = document.getElementById("graphContainer");

    const options = { 
      width: "100%",
      height: "100%",
      nodes:  {
        color:  "#229db3",
        font: {
          size: 10,
        }, 
      },
      edges: {
        color:  "#eeeeee",
        font: {
          size: 10,
        },
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
      });
      theChart.on('select', (event)=> {
        if (selectedNodes.length >= 1 && event.nodes.length > 0) {

          event.nodes.forEach(selected => {
            selectedNodes.push(selected);
          })
          theChart.selectNodes(selectedNodes);
          emitEvents(EVENT_EDGE_SELECTED, {
            nodes: selectedNodes,
            edges: event.edges
          });

          return;
        }

        if (selectedNodes.length >= 0 & event.nodes.length > 0) {
          selectedNodes.push(event.nodes[0]);
          theChart.selectNodes(selectedNodes);
          emitEvents(EVENT_NODE_SELECTED, selectedNodes);

          return;
        }

        selectedNodes = []
        theChart.selectNodes(selectedNodes);
        emitEvents(EVENT_NO_NODE_SELECTED);
      });

      theChart.on('dragEnd', ()=> {
        emitEvents(EVENT_GRAPH_POSITION_EDIT, { 
          nodes: theChart.getPositions()
         });
      })
  })

  watch(nodes, () => {
    if(nodes.length !== nodesDataSet.length) {
      nodesDataSet.clear(nodes)  
    }

    nodesDataSet.update(nodes)
  })
  watch(edges, () => {

    if(edges.length !== edgesDataSet.length) {
      edgesDataSet.clear(edges)  
    }
    edgesDataSet.update(edges)
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
  #graphContainer{
    height: 100%;
  }
</style>