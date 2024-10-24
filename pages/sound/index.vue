<script setup>
import { GameOfLife } from '~/songGenerator/gameOfLife';

  const GRID_LIMIT_ROW = 10;
  const GRID_LIMIT_COL = 10;
  const TONE_DURATION = 100;
  const CIRCLE_DURATION = 1000 * 2;

  const isPlaying = ref(false)


  let interval = undefined
  let audioContext = undefined

  let oscilatorList = []

  const start = () => {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)()

    isPlaying.value = !isPlaying.value;
    
    if(isPlaying.value === true) {
      set()
    }
    else {
      stop()
    }

    
  }

  const set = (callback) => {
    
    console.log(callback)
    if (oscilatorList.length > 0) {
      return;
    }
    const result = game.nextGeneration();
    result
    .filter(entered => entered.value === 1)
    .forEach( filtered => {
      
      play(convertCoordinatesToFrequency(
        filtered.row, filtered.col
      ), TONE_DURATION);
    })
      
    interval = requestAnimationFrame( set );  

    
  }

  const createGrid = () => {
    const grid = new Array(GRID_LIMIT_ROW);

    for(let row = 0; row < GRID_LIMIT_ROW; row++) {
      grid[row] = new Array(GRID_LIMIT_COL).fill(0);
    }
    

    return grid
  }

  const convertCoordinatesToFrequency = (row, col) => {
    const MULTIPLIER_TO_REACH_RANGE = 15;
    const PLUS_TO_EXIT_ZERO = 1;

    return ((row + PLUS_TO_EXIT_ZERO ) * (col + PLUS_TO_EXIT_ZERO)) * MULTIPLIER_TO_REACH_RANGE
  }

  const play = (frequency, duration) => {

    if (oscilatorList.length > 2)  {
      return
    }
    const oscillator = audioContext.createOscillator();
    

    oscillator.type = 'sine';

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    oscillator.connect(audioContext.destination);

    oscillator.start();
    oscilatorList.push(oscillator)
    console.log(frequency, duration)

    setTimeout(() => {
      stop();
    }, duration);
  }

  const stop = ()=> {
    clearInterval(interval)
    oscilatorList.forEach(() => {
      const oscillator = oscilatorList.pop()
      oscillator.stop();
      oscillator.disconnect()
    })
    
  }

  let grid = ref(createGrid());
  
  const game = new GameOfLife(GRID_LIMIT_ROW, GRID_LIMIT_COL, grid);

  

  
  const changeValue = (row, col, value) => {
    game.setCell(row, col, value === 1 ? 0 : 1)
  }


  game.setCell(1, 2, 1);
  game.setCell(2, 3, 1);
  game.setCell(3, 1, 1);
  game.setCell(3, 2, 1);
  game.setCell(3, 3, 1);

  
</script>

<template>
  
  <div class="game">
    <button @click="start()"> {{ isPlaying ? 'Pausar' : 'Tocar'}}</button>
    <div v-for="(row, rowIndex) in grid" :key="rowIndex">

      <button 
        v-for="(col, colIndex) in grid[rowIndex]" :key="colIndex"
        @click="changeValue(rowIndex, colIndex, grid[rowIndex][colIndex])">
        {{  grid[rowIndex][colIndex] }}
      </button>
    </div>
  </div>
</template>