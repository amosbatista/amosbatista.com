<script setup>
import { soundGeneratorPersistece } from '~/composables/soundGeneratorPersistence';
import { GameOfLife } from '~/songGenerator/gameOfLife';
import * as Tone from "tone";
import { OrganismCreator } from '~/songGenerator/Organism/OrganismCreator';
import { glider } from '~/songGenerator/Organism/predefs/glider';
import { blinker } from '~/songGenerator/Organism/predefs/blinker';

  const GRID_LIMIT_ROW = 24;
  const GRID_LIMIT_COL = 24;
  // const TONE_LIMIT = 8;
  const DEFAULT_FREQUENCY = 1;
  const SMOOTH_INTERVAL = 0.6;

  const TONE_ON_VALUE = 1

  const isPlaying = ref(false)
  const toneDuration = ref(200)
  const toneMultiplier = ref(10)

  const NOTES_LIST = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const OCTAVE_LIST = ['2','3'];
  const NOTE_TYPE_LIST = ['', '#']

  const gameMemory = soundGeneratorPersistece();


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
      synths.push(generateSynth())
    }
    
  }

  const generateSynth = () => {
    
    const newSynth = new Tone.Synth({
      oscillator: {
        type: 'triangle'
      }
    }).toDestination();

    return newSynth
    
  }

  const notesList = generateAllNoteList()

  const snapShot = () => {
    lastPlayedNote.forEach(cell=> {
      gameMemory().set(cell.row, cell.col, cell.value)
    })
  }
  const tryStart = () => {

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
    generateSynths()
    const result = game.nextGeneration();

    if(result.length <= 0) {
      stop()
    }

    result
      .filter(entered => entered.value === 1)
      .filter(selected => {
        const playedBefore = lastPlayedNote.find(
          last => last.row === selected.row && last.col === selected.col && last.value === selected.value
        )
        return !playedBefore ? true : undefined
      })
      .slice(-GRID_LIMIT_COL)
      .forEach( (filtered, _index) => {
        play(
          convertColumnToNote(filtered.col), 
          toneDuration.value,
          convertRowToVolume(filtered.row),
          synths[_index]
        );
      })
    
    lastPlayedNote = result.splice(0);
    setTimeout(set, toneDuration.value);
    
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

  const play = (frequency, durationInMilisecs, volume, synth) => {
    try {
      synth.volume.value = volume
      synth.triggerAttackRelease(frequency, durationInMilisecs / 1000) 
    }
    catch(er) {
      console.log('Erro no indice ' + index)
      console.log(er)
    }
  }

  const stop = ()=> {
    isPlaying.value = false


    
  }

  let grid = ref(createGrid());
  
  const game = new GameOfLife(GRID_LIMIT_ROW, GRID_LIMIT_COL, grid);

  

  
  const boardButtonClick = (row, col, value) => {
    
    const mustPlayTone = value === TONE_ON_VALUE ? 0 : TONE_ON_VALUE
    game.setCell(row, col, mustPlayTone)  

    if(mustPlayTone === TONE_ON_VALUE) {
      playFromButton(row, col)
    }
    
  }

  const playFromButton = (row, col) => {
    
    const synthToPlay = generateSynth()

    play(
      convertColumnToNote(col), 
      toneDuration.value,
      convertRowToVolume(row),
      synthToPlay
    )  
  }


  const generateGlider = () => {
    const creator = new OrganismCreator(game, TONE_ON_VALUE);

    const organism = creator.GenerateFromOrganism(glider)

    creator.GenerateFromOrganism(organism)
  }

  const generateBlinker = () => {
    const creator = new OrganismCreator(game, TONE_ON_VALUE);

    const organism = creator.GenerateFromOrganism(blinker)

    creator.GenerateFromOrganism(organism)
  }

  
  gameMemory().get().forEach(element => {
    game.setCell(element.row, element.col, 1);
  });

  
</script>

<template>

  <div class="game">
    <h1>Game of Life Sound Generator #4</h1>
    <h5>Note vs Volume - Tonejs</h5>
    <p>Com toneJs, e com gerador de blinks.</p>
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
      <button id="toggle" @click="tryStart()"> {{ isPlaying ? 'Pausar' : 'Tocar'}}</button>  
    </div>

    <div class="action-zone">
      <label for="clear">Resetar o jogo</label>
      <button id="clear" @click="clear()"> Resetar</button>  
    </div>

    <div class="creator">
      <!-- <button @click="createBlinker()">blinker</button> -->
      <button @click="generateGlider()">criar glider</button>

      <button @click="generateBlinker()">criar blinker</button>
    </div>
    


    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">

      <button 
        class="button-tone"
        v-if="rowIndex === 0"
        v-for="note in notesList">{{ note.name }}</button>
      <button 
        v-if="rowIndex !== 0"
        v-for="(col, colIndex) in grid[rowIndex]" :key="colIndex"
        @click="boardButtonClick(rowIndex, colIndex, grid[rowIndex][colIndex])"
        class="button-tone"
        :class="grid[rowIndex][colIndex] === 1 ? 'on' : 'off'">
      </button>
    </div>
  </div>
</template>

<style>
  :root {
    --dimensao-botoes: 25px;
  }
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
  .row {
    height: var(--dimensao-botoes);
  }

  .button-tone {
    border: 0;
    margin: 0;
    width: var(--dimensao-botoes);
    height: var(--dimensao-botoes);
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