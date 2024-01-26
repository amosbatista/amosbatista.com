const generateJsonNodesWithPosition = function(nodesFromAnalyze, nodesFromChart) {
        const nodesWithPosition = [];

        nodesFromAnalyze.forEach((nodeFromAnalisis) => {
          const nodeFromChart = nodesFromChart[nodeFromAnalisis.id.toString()]
          
          nodesWithPosition.push({
            ...nodeFromAnalisis,
            x: nodeFromChart.x,
            y: nodeFromChart.y,
          })
        })

        console.log(JSON.stringify(nodesWithPosition));

      }