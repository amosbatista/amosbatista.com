<template>
  <div class="content">
    <letter-unit 
      v-for="(letterDigit, letterIndex) in lettersToRender"
      :letter="letterDigit">
        {{letterIndex}}
      </letter-unit>
  </div>
</template>

<script>
  import letterUnit from './components/letterUnit'
  import LetterGenerator from './letterRenderListGenerator'
  import randomLetterGenerator from './randomLetterGenerator'

  export default {
    components: { letterUnit } ,
    data () {
      return {
        lettersToRender: [],
      }
    },
    mounted ()  {
      const letterGenerator = new LetterGenerator(randomLetterGenerator);
      const limit = 500;
      this.lettersToRender = letterGenerator.generate(limit);
    }
  }
</script>

<style>
  .content {
    font-size: 40px;
  }
</style>