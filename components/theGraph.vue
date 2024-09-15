



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
      });
      theChart.on('select', (event)=> {

        if (event.nodes.length > 1) {
          emitEvents(EVENT_EDGE_SELECTED, {
            nodes: event.nodes,
            edges: event.edges
          });

          return;
        }

        if (event.nodes.length > 0) {
          emitEvents(EVENT_NODE_SELECTED, event.nodes[0]);

          return;
        }

        emitEvents(EVENT_NO_NODE_SELECTED);
      });

      theChart.on('dragEnd', ()=> {
        emitEvents(EVENT_GRAPH_POSITION_EDIT, { 
          nodes: theChart.getPositions()
         });
      })
  })

  watch(nodes, () => {
    nodesDataSet.update(nodes)
  })
  watch(edges, () => {
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