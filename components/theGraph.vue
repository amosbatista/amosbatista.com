



<script setup>
  import vis from 'vis';
import { NodesTypes } from '~/vis/graph.nodes.type';

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
    nodesDataSet.update(nodeFormatTranslator(nodes))


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
        smooth: {
          enabled: false
        },
        scaling: {
          max: 5,
          label: false
        }
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

    nodesDataSet.update(nodeFormatTranslator(nodes))
  })
  watch(edges, () => {

    if(edges.length !== edgesDataSet.length) {
      edgesDataSet.clear(edges)  
    }
    edgesDataSet.update(edges)
  })

  const nodeFormatTranslator = (_nodes) => {
    return _nodes.map (node => ({
      ...node,
      color: NodesTypes[node.type] ? NodesTypes[node.type].color : NodesTypes['type1'].color,
      margin: NodesTypes[node.type] ? NodesTypes[node.type].margin : NodesTypes['type1'].margin,
      shape: NodesTypes[node.type] ? NodesTypes[node.type].shape : NodesTypes['type1'].shape,
      font: {
        color: NodesTypes[node.type] ? NodesTypes[node.type].font.color : NodesTypes['type1'].font.color,
        bold: NodesTypes[node.type] ? NodesTypes[node.type].font.bold : NodesTypes['type1'].font.bold

      },
      shapeProperties: {
        borderDashes: NodesTypes[node.type] ? NodesTypes[node.type].shapeProperties.borderDashes : NodesTypes['type1'].shapeProperties.borderDashes,
      },
      borderWidth: NodesTypes[node.type] ? NodesTypes[node.type].borderWidth : NodesTypes['type1'].borderWidth,
    }))
  }
 
  
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