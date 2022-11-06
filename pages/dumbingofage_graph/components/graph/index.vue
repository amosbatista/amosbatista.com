<template lang="pug">
  .comp
    #graphContainer
</template>

<script>
  import vis from 'vis';
  import { CharacterManagerFormatter } from '../../services/CharacterManagerFormatter'
  import * as nodes from '../../data/nodesWithPosition'
  import * as edges from '../../data/edges'


  export default {
    data () {
      return {
        chart: null
      }
    },
    mounted () {
      
      const container = document.getElementById("graphContainer");
      const formatter = new CharacterManagerFormatter(nodes.default, edges.default);

      const MINIMUN_INTERACTION_LEVEL = 0;
      const formattedData = formatter.filterByMininalValue(MINIMUN_INTERACTION_LEVEL);
      const options = { 
        width: "100%",
        height: "100%",
        //autoResize: true,
        /*layout: {
          randomSeed: 949842,
        },*/
        nodes: {
          color:  "#229db3",
          font: {
            size: 6,
          }
        },
        edges: {
          smooth: false,
        },
        /*physics: {
          enabled: false,
        }*/
        /*physics: {
          enabled: true,
          solver: "forceAtlas2Based",
          forceAtlas2Based: {
            theta: 0,
            centralGravity: 0.002,
            avoidOverlap: 0.01
          },
          stabilization: {
            enabled: true // This is here just to see what's going on from the very beginning.
          }
        }*/
        physics: {
          barnesHut: { 
            gravitationalConstant: -400000
         },
          stabilization: { 
            iterations: 4500 
          },
          hierarchicalRepulsion: {
            centralGravity: 500,
          },
          solver: "barnesHut"
        },

      };
      let nodesDataSet = new vis.DataSet(formattedData.nodes);
      let theChart = null;
      
      theChart = new vis.Network(container, {
        nodes: nodesDataSet,
        edges: new vis.DataSet(formattedData.edges)
      }, options);

      theChart.moveTo({
        position: {x:10,y:30},
        scale: 3.5,
        offset: {x:0,y:0}
      })

      

      // Capturar os nós renderizados
      //console.log(theChart.body.nodes)
      //generateJsonNodesWithPosition(nodesDataSet, theChart.body.nodes);
      
      let mustRedrawChart = true;

      theChart.on('afterDrawing', function(){
        if(mustRedrawChart){
          mustRedrawChart = false
          nodesDataSet.update(formattedData.nodes);
        }
      })

      theChart.on("click", function (params) {
        const connectedNodeIds = theChart.getConnectedNodes(params.nodes[0]);
        if(params.nodes.length <= 0) {
          theChart.update(nodesDataSet);
        
          return;
        }
        const nodesToChange = [];
        connectedNodeIds.push(params.nodes[0]);
        connectedNodeIds.forEach(nodeId => {
          const nodeToChange = formattedData.nodes.slice().find(node => {
            return node.id == nodeId
          })
          if(nodeToChange) {
            nodesToChange.push({
              color:  "#fe8786",
              font: {
                size: 8,
                bold: { mod: 'bold'},
              },
              label: nodeToChange.label,
              shape: nodeToChange.shape,
              image: nodeToChange.image,
              id: nodeToChange.id,
              opacity: 0.7
            });  
          }
        });
        const nodesToUpdate = formattedData.nodes.slice().map(oldNodes => {
          const nodeToUpdate = nodesToChange.find( nodeToUpdate => {
            return nodeToUpdate.id == oldNodes.id
          });
          
          return nodeToUpdate || oldNodes;
        });
        nodesDataSet.update(nodesToUpdate);

      });  
    }
  }
</script>

<style>
  #graphContainer {
    width: 100vw;
    height: 100vh;
    border: 2px solid sandybrown;
  }
</style>