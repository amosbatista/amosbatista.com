<script setup>
import { soundGeneratorPersistece } from '~/composables/soundGeneratorPersistence';
import { GameOfLife } from '~/songGenerator/gameOfLife';
import { notes } from '~/songGenerator/notes';

  const GRID_LIMIT_ROW = 24;
  const GRID_LIMIT_COL = 24;
  const DEFAULT_FREQUENCY = 1;
  const SMOOTH_INTERVAL = 0.6;

  const TONE_ON_VALUE = 1

  const isPlaying = ref(false)
  const toneDuration = ref(200)
  const toneMultiplier = ref(15)

  const NOTES_LIST = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const OCTAVE_LIST = ['2','3'];
  const NOTE_TYPE_LIST = ['', '#']

  const gameMemory = soundGeneratorPersistece();

  let interval = undefined
  let audioContext = undefined

  let oscilatorList = []
  let lastOscilatorList = []

  const oscilattorsGenerator = () => {
    if (oscilatorList.length >= GRID_LIMIT_ROW - 1) {
      return
    }
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)()

    for (let index = 1; index <= GRID_LIMIT_ROW; index++) {
      const oscillator = new OscillatorNode(audioContext, {
        type: 'triangle',
        frequency: DEFAULT_FREQUENCY,
      })

      const gainNode = new GainNode(audioContext, {
        gain: 0
      })
      

      oscillator
      .connect(gainNode)
      .connect(audioContext.destination)

      oscillator.start()
      oscilatorList.push({
        oscillator,
        gainNode,
      })
    }

    // presetCompressor();
  }

  const generateAllNoteList = () => {
    const final = []

    OCTAVE_LIST.forEach(octave => {
      NOTES_LIST.forEach(note => {
        NOTE_TYPE_LIST.forEach(type => {
          if ( type === '#' && (note === 'E' || note === 'B') ) {
            return
          }
          final.push({
            name: `${note}${type}${octave}`,
            note, octave, type
          })
        })
      })
    })

    return final
  }

  const notesList = generateAllNoteList()

  const snapShot = () => {
    lastOscilatorList.forEach(cell=> {
      gameMemory().set(cell.row, cell.col, cell.value)
    })
  }
  const tryStart = () => {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)()

    isPlaying.value = !isPlaying.value;
    
    if(isPlaying.value === true) {
      set()
    }
    else {
      snapShot()
      stop()
    }

    
  }

  const clear = () => {
    isPlaying.value = false
    stop()
    gameMemory().clear()

    for(let col = 0; col < GRID_LIMIT_COL; col++) {
      for(let row = 0; row < GRID_LIMIT_ROW; row++) {
        game.setCell(row, col, 0);
      }
    }
  }

  const set = () => {
    
    if (isPlaying.value === false) {
      return
    }
    oscilattorsGenerator()
    const result = game.nextGeneration();
    result
      .filter(entered => entered.value === 1)
      .filter(selected => {
        const playedBefore = lastOscilatorList.find(
          last => last.row === selected.row && last.col === selected.col && last.value === selected.value
        )
        return !playedBefore ? true : undefined
      })
      .forEach( (filtered, index) => {
        play(
          convertColumnToFrequency(filtered.col), 
          toneDuration.value,
          convertRowToVolume(filtered.row),
          index
        );
      })
    
    lastOscilatorList = result.splice(0);
    setTimeout(set, toneDuration.value);
    
  }

  const presetCompressor = () => {
    // Create a compressor node
    const compressor = new DynamicsCompressorNode(audioContext, {
      threshold: -99,
      ratio: 1,
      attack: 0,
      release: 0.9,
    })
    compressor.connect(audioContext.destination)
  }

  const createGrid = () => {
    const grid = new Array(GRID_LIMIT_ROW);

    for(let row = 0; row < GRID_LIMIT_ROW; row++) {
      grid[row] = new Array(GRID_LIMIT_COL).fill(0);
    }
    

    return grid
  }

  const convertColumnToFrequency = (col) => {
    return notes[
      notesList[col].note
    ][
      notesList[col].octave
    ][
      notesList[col].type === '' ? 'normal' : 'susten'
    ]
  }

  const convertRowToVolume = (row) => {
    return ((row * 100 / GRID_LIMIT_ROW) / 100)
  }

  const play = (frequency, duration, volume, index) => {
    if (!oscilatorList[index]) {
      return
    }
    oscilatorList[index].oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscilatorList[index].gainNode.gain.setValueAtTime(volume, audioContext.currentTime, SMOOTH_INTERVAL);
    setTimeout(() => {
      oscilatorList[index].gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    }, duration)
    oscilatorList[index].gainNode.gain.setValueAtTime(0, audioContext.currentTime + duration);
    
    

  }

  const stop = ()=> {
    clearInterval(interval)  

    oscilatorList.forEach((config) => {
      config.gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    })
    /*oscilatorList.forEach(() => {
      const config = oscilatorList.pop()

      try{
        config.oscillator.stop();
      }
      catch {
        
      }
      config.oscillator.disconnect()
    })*/
    
  }

  let grid = ref(createGrid());
  
  const game = new GameOfLife(GRID_LIMIT_ROW, GRID_LIMIT_COL, grid);

  

  
  const changeValue = (row, col, value) => {
    
    const newValue = value === TONE_ON_VALUE ? 0 : TONE_ON_VALUE
    game.setCell(row, col, newValue)  
  }

  
  gameMemory().get().forEach(element => {
    game.setCell(element.row, element.col, 1);
  });

  
</script>

<template>

  <div class="game">
    <h1>Game of Life Sound Generator #2</h1>
    <h5>Basic - Small - Note vs Volume</h5>
    <p>A escala de som começa com Dó, Dó sustenido, até o fim da lista. Quanto mais próximo do topo, mais alto o volume.</p>
    <div class="speed-zone">
      <label for="toneSlider">Duração do tom</label>
      <input type="range" id="toneSlider" v-model="toneDuration" min="50" max="500">
    </div>
    <div class="speed-zone tone-zone">
      <label for="toneSlider">Afinador</label>
      <div>
        <span>Mais grave</span>
        <input type="range" id="toneSlider" v-model="toneMultiplier" min="5" max="25">
        <span>Mais agudo</span>
      </div>
    </div>

    <div class="action-zone">
      <label for="toggle">Inicie ou pause</label>
      <button id="toggle" @click="tryStart()"> {{ isPlaying ? 'Pausar' : 'Tocar'}}</button>  
    </div>

    <div class="action-zone">
      <label for="clear">Resetar o jogo</label>
      <button id="clear" @click="clear()"> Resetar</button>  
    </div>

    


    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">

      <button 
        class="button-tone"
        v-if="rowIndex === 0"
        v-for="note in notesList">{{ note.name }}</button>
      <button 
        v-if="rowIndex !== 0"
        v-for="(col, colIndex) in grid[rowIndex]" :key="colIndex"
        @click="changeValue(rowIndex, colIndex, grid[rowIndex][colIndex])"
        class="button-tone"
        :class="grid[rowIndex][colIndex] === 1 ? 'on' : 'off'">
      </button>
    </div>
  </div>
</template>

<style>
  .game {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .speed-zone, .action-zone {
    width: 50%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
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