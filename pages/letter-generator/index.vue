<script>

import vueMeta from '~/components/meta.vue'
import linkStyle from '~/components/external-link-style.vue'
import facebookApp from '~/components/facebook-app.vue'

export default {
  components: {
    vueMeta, facebookApp, linkStyle
  },
  data: function () {
    return {
      theDigits: ['c','a','e','d','g','e','3','v','v','e','t','4','X','q','q','%','q','@','Ç','~','ª', '&', 'Z', '5', 'A'],
      meta: {
        title: 'letter generator',
        description: 'letter generator',
        thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
        url: "https://amosbatista.com/thumbnails/home.jpg",
        type: "post"
      },
    }
  },
}
</script>

<template lang="pug">
  .letter-generator

    vue-meta(:metadata="meta")
    facebook-app
    link-style

    .container.centered

      .the-block
        span.the-digit(v-for="digit in theDigits")
          |{{ digit }}



</template>

<style lang="less">

  @import '../../assets/main.less';

  body {
    background-color: aliceblue;
  }

  .centered{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .the-block {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    width: 300px;
    height: 300px;
    border: 3px solid yellowgreen;
    padding: 10px;

    span.the-digit{
      font-size: 50px;
      text-align: center;
    }
  }
  

</style>

