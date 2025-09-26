<script setup>
import * as Tone from "tone";

  const GRID_LIMIT_ROW = 24;
  const GRID_LIMIT_COL = 24;
  // const TONE_LIMIT = 8;
  const DEFAULT_FREQUENCY = 1;
  const SMOOTH_INTERVAL = 0.6;

  const TONE_ON_VALUE = 1

  const isPlaying = ref(false)
  const toneDuration = ref(1000)
  const toneMultiplier = ref(10)

  const NOTES_LIST = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const OCTAVE_LIST = ['2','3'];
  const NOTE_TYPE_LIST = ['', '#']

  let lastPlayedNote = []
  let synths = []

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

  const generateSynths = () => {
    if(synths.length > 0) {
      return
    }
    for(let i = 0; i < GRID_LIMIT_COL; i++) {
      const newSynth = new Tone.Synth({
        oscillator: {
          type: 'triangle'
        }
      }).toDestination();
      synths.push(newSynth)
    }
    
  }

  const notesList = generateAllNoteList()

  
  const toogle = () => {

    isPlaying.value = !isPlaying.value;
    
    if(isPlaying.value === true) {
      set()
    }
    else {
      stop()
    }

    
  }

  const clear = () => {
    stop()

  }

  const set = () => {
    
    if (isPlaying.value === false) {
      return
    }
    
    grid.value.forEach( (row, volumeIndex) => {
      row.forEach( (colum, noteIndex) => {

        if(colum === TONE_ON_VALUE) {
          play(
            convertColumnToNote(noteIndex), 
            convertRowToVolume(volumeIndex),
            noteIndex
          );
        }
      });
    })

    
    

    
  }

  const createGrid = () => {
    const grid = new Array(GRID_LIMIT_ROW);

    for(let row = 0; row < GRID_LIMIT_ROW; row++) {
      grid[row] = new Array(GRID_LIMIT_COL).fill(0);
    }
    

    return grid
  }

  const convertColumnToNote = (col) => {
    const colAfterFineAdjust = col - (toneMultiplier.value - 10)

    if(!notesList[colAfterFineAdjust]) {
      return
    }
    return `${notesList[colAfterFineAdjust].note}${notesList[colAfterFineAdjust].type}${notesList[colAfterFineAdjust].octave}`
  }
  

  const convertRowToVolume = (row) => {
    return ((row * 100 / GRID_LIMIT_ROW) / 25)
  }

  const play = (frequency, volume, index) => {
    try {
      synths[index].volume.value = volume
      synths[index].triggerAttackRelease(frequency) 
    }
    catch(er) {
      console.log('Erro no indice ' + index)
      console.log(er)
    }
  }

  const stopAllSynths = () => {
    for(let index = 0; index < synths.length - 1; index ++) {
      synths[index].triggerRelease();
    }
  }

  const stop = ()=> {
    isPlaying.value = false
    stopAllSynths();

    
  }
  


  let grid = ref(createGrid());
  
  generateSynths()

  

  
  const changeValue = (row, col, value) => {
    
    const newValue = value === TONE_ON_VALUE ? 0 : TONE_ON_VALUE

    disableAnyToneAlreadySet(col);
    grid.value[row][col] = newValue
    stop()
    toogle()
  }

  const disableAnyToneAlreadySet = (col) => {
    grid.value.forEach( (row, rowIndex) => {
      if(row[col] === TONE_ON_VALUE) {
        grid.value[rowIndex][col] = 0
      }
    })
  }


  
</script>

<template>

  <div class="game">
    <h1>Sound Generator #4</h1>
    <h5>From - To</h5>
    <p>mesma coisa da página de volume, mas agora usando a Tone.Js.</p>
    <div class="speed-zone">
      <label for="toneSlider">Duração do tom</label>
      <input type="range" id="toneSlider" v-model="toneDuration" min="50" max="500">
    </div>
    <div class="speed-zone tone-zone">
      <label for="toneSlider">Afinador</label>
      <div>
        <span>Mais agudo</span>
        <input type="range" id="toneSlider" v-model="toneMultiplier" min="5" max="15">
        <span>Mais grave</span>
      </div>
    </div>

    <div class="action-zone">
      <label for="toggle">Inicie ou pause</label>
      <button id="toggle" @click="toogle()"> {{ isPlaying ? 'Pausar' : 'Tocar'}}</button>  
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