<script setup>
  let toneFreq = ref(30);
  let audioContext = undefined
  let oscillator = undefined
  const DURATION = 1000 * 60 * 5;
  const isPlaying = ref(false)
  
  const play = (frequency, duration) => {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)()
    oscillator = oscillator || audioContext.createOscillator();

    oscillator.type = 'sine';

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    oscillator.connect(audioContext.destination);

    oscillator.start();

    setTimeout(() => {
      stop();
    }, duration);
  }

  const stop = () => {
    if(!oscillator) {
      return
    }
    oscillator.stop();
    oscillator.disconnect()
    oscillator = null
  }

  const toggle = () => {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)()

    isPlaying.value = !isPlaying.value;
    
    if(isPlaying.value) {
      play(toneFreq.value, DURATION)
    }
    else {
      stop()
    }


  }
  watch(
    toneFreq, (newFrq) => {
      if(oscillator) {
        oscillator.frequency.setValueAtTime(newFrq, audioContext.currentTime);
      }
      
    }
  )

</script>
<template>
  <form>
    <label for="toneSlider">Selecione o tom</label>
    <input type="range" id="toneSlider" v-model="toneFreq" min="100" max="5000">
    <p>Frequencia: <strong>{{  toneFreq }}</strong></p>
    <button type="button" @click="toggle()"> {{ isPlaying ? 'Pausar' : 'Tocar'}}</button>
  </form>
</template>

<style>
  form {
    padding: 10px;
    margin-bottom: 30px;
    border: 1px solid green;
  }
</style>