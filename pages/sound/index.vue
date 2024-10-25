<script setup>
import { soundGeneratorPersistece } from '~/composables/soundGeneratorPersistence';
import { GameOfLife } from '~/songGenerator/gameOfLife';

  const GRID_LIMIT_ROW = 10;
  const GRID_LIMIT_COL = 10;
  const SIMULTANEOUS_TONES = 6;

  const TONE_ON_VALUE = 1

  const isPlaying = ref(false)
  const toneDuration = ref(200)
  const toneMultiplier = ref(15)

  const gameMemory = soundGeneratorPersistece();

  let interval = undefined
  let audioContext = undefined

  let oscilatorList = []

  const tryStart = () => {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)()

    isPlaying.value = !isPlaying.value;
    
    if(isPlaying.value === true) {
      set()
    }
    else {
      stop()
    }

    
  }

  const set = () => {
    
    if (isPlaying.value === false) {
      return
    }
    if (oscilatorList.length > 0) {
      return;
    }
    const result = game.nextGeneration();
    result
    .filter(entered => entered.value === 1)
    .forEach( filtered => {
      
      play(convertCoordinatesToFrequency(
        filtered.row, filtered.col
      ), toneDuration.value);
    })
      
    
    setTimeout(set, toneDuration.value);
    
  }

  const createGrid = () => {
    const grid = new Array(GRID_LIMIT_ROW);

    for(let row = 0; row < GRID_LIMIT_ROW; row++) {
      grid[row] = new Array(GRID_LIMIT_COL).fill(0);
    }
    

    return grid
  }

  const convertCoordinatesToFrequency = (row, col) => {
    const PLUS_TO_EXIT_ZERO = 1;

    return ((row + PLUS_TO_EXIT_ZERO ) * (col + PLUS_TO_EXIT_ZERO)) * toneMultiplier.value
  }

  const play = (frequency, duration) => {

    if (oscilatorList.length > SIMULTANEOUS_TONES)  {
      return
    }

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscilatorList.push(oscillator)

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
    
    const newValue = value === TONE_ON_VALUE ? 0 : TONE_ON_VALUE
    game.setCell(row, col, newValue)

    gameMemory().set(row, col, newValue)

    
  }

  
  gameMemory().get().forEach(element => {
    game.setCell(element.row, element.col, 1);
  });

  
</script>

<template>

  <div class="game">

    <div class="speed-zone">
      <label for="toneSlider">Duração do tom</label>
      <input type="range" id="toneSlider" v-model="toneDuration" min="50" max="500">
    </div>
    <div class="speed-zone">
      <label for="toneSlider">Afinador</label>
      <span>Mais grave</span>
      <input type="range" id="toneSlider" v-model="toneMultiplier" min="5" max="25">
      <span>Mais agudo</span>
    </div>

    <div class="action-zone">
      <label for="toggle">Inicie ou pause</label>
      <button id="toggle" @click="tryStart()"> {{ isPlaying ? 'Pausar' : 'Tocar'}}</button>  
    </div>

    



    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">

      <button 
        v-for="(col, colIndex) in grid[rowIndex]" :key="colIndex"
        @click="changeValue(rowIndex, colIndex, grid[rowIndex][colIndex])"
        class="button-tone"
        :class="grid[rowIndex][colIndex] === 1 ? 'on' : 'off'">
      </button>
    </div>
  </div>
</template>

<style>
  .row {
    margin: 0;
    display: flex;
  }
  .button-tone {
    border: 0;
    margin: 0;
    width: 25px;
    height: 25px;
  }
  .on {
    background-color: #ccff00;
    color: #37373f;
  }
  .off {
    background-color: #37373f;
    color: #ccff00;
  }
</style>