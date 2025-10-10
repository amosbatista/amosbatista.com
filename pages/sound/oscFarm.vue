<script setup>
import { soundGeneratorPersistece } from '~/composables/soundGeneratorPersistence';
import { GameOfLife } from '~/songGenerator/gameOfLife';
import * as Tone from "tone";
import { OrganismCreator } from '~/songGenerator/Organism/OrganismCreator';

// Moar oscillators
import { blinker } from '~/songGenerator/Organism/predefs/blinker';
import { pulsar } from '~/songGenerator/Organism/predefs/pulsar';
import { pinWheel } from '~/songGenerator/Organism/predefs/pinwheel';
import { octagon2 } from '~/songGenerator/Organism/predefs/octagon2';
import { $rats } from '~/songGenerator/Organism/predefs/rats';
import { Burloaferimeter } from '~/songGenerator/Organism/predefs/Burloaferimeter';
import { figure8 } from '~/songGenerator/Organism/predefs/figureEight';
import { workerBee } from '~/songGenerator/Organism/predefs/workerbee';
import { quatroDoisp10 } from '~/songGenerator/Organism/predefs/42p10.3';
import { tresOitaop11_1 } from '~/songGenerator/Organism/predefs/38p11.1';
import { pentadecathlon } from '~/songGenerator/Organism/predefs/pentadecathlon';
import { tumbler } from '~/songGenerator/Organism/predefs/tumbler';
import { BuckinghamP13 } from '~/songGenerator/Organism/predefs/Buckinghamp13';
import { dinnerTable } from '~/songGenerator/Organism/predefs/dinnerTable';


  const oscillatorList = [blinker, pulsar, pinWheel, octagon2, $rats, Burloaferimeter, figure8, 
    workerBee, quatroDoisp10, tresOitaop11_1, pentadecathlon, tumbler, BuckinghamP13, dinnerTable
  ]


  const GRID_LIMIT_ROW = 24;
  const GRID_LIMIT_COL = 24;
  // const TONE_LIMIT = 8;
  const DEFAULT_FREQUENCY = 1;
  const SMOOTH_INTERVAL = 0.6;

  const TONE_ON_VALUE = 1

  const isPlaying = ref(false)
  const firstSetDidnPlayed = ref(false)
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
  const toogleStartStop = () => {

    if(isPlaying.value === true) {
      snapShot()
      stop()

      isPlaying.value = false
    }
    else {
      tryStart()
    }

    
  }

  const tryStart = () => {

    if(isPlaying.value !== true) {
      isPlaying.value = true

      set()
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

        if( firstSetDidnPlayed.value === false ) {
          firstSetDidnPlayed.value = true;
        }

        else {
          play(
            convertColumnToNote(filtered.col), 
            toneDuration.value,
            convertRowToVolume(filtered.row),
            synths[_index]
          );
        }
        
        
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
    firstSetDidnPlayed.value = false;

    
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


  const generateOrganism = (predef) => {
    if(predef.unique) {
      clear()
    }

    const creator = new OrganismCreator(game, TONE_ON_VALUE);

    const organism = creator.GenerateFromOrganism(predef)

    creator.GenerateFromOrganism(organism)

    setTimeout(() => {
      tryStart()
    }, 250)
    
  }

  
  gameMemory().get().forEach(element => {
    game.setCell(element.row, element.col, 1);
  });

  
</script>

<template>

  <div class="game">
    <h1>oscFarm</h1>
    <h2>Game of Life Sound Generator #5</h2>
    <p>Com toneJs, e com gerador de osciladores.</p>
    

    
    
    <div class="row">
      <div class="col">

        <div class="creator">
          <button 
            v-for="predefOrg in oscillatorList"
            @click="generateOrganism(predefOrg)">{{predefOrg.name}}</button>
        </div>

        <div class="speed-zone">
          <label for="toneSl100%r">Duração do tom</label>
          <input type="range" id="toneSlider" v-model="toneDuration" min="50" max="500">
        </div>
        <div class="speed-zone tone-zone">
          <label for="toneSl100%r">Afinador</label>
          <div>
            <span>Mais agudo</span>
            <input type="range" id="toneSlider" v-model="toneMultiplier" min="5" max="15">
            <span>Mais grave</span>
          </div>
        </div>

        <div class="action-zone">
          <label for="toggle">Inicie ou pause</label>
          <button id="toggle" @click="toogleStartStop()"> {{ isPlaying ? 'Pausar' : 'Tocar'}}</button>  
        </div>

        <div class="action-zone">
          <label for="clear">Resetar o jogo</label>
          <button id="clear" @click="clear()"> Resetar</button>  
        </div>
      </div>

      <div class="board">
        <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row-button">

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

  .row {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .col {
      width: 44%;
    }
  }
  .speed-zone, .action-zone {
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  .row-button {
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

  .creator {
    margin: 20px 0;
    background-color: #c4f5d6;
    max-width: 600px;
    
    button {
      margin: 10px 3px;
      padding: 5px;
      font-weight: bold;
    }
  }
</style>