<template lang="pug">
  .sketchtember
    link(href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playfair+Display&display=swap" rel="stylesheet")
    h1 sketchtember 2023

    img(src="@/static/sketch/tratado.png")

    p
      | Estes são os meus prompts para o sketchtember deste ano. Tente fazer por 1 mês, ou faça o que conseguir:

    ol(type="1")
      li Mãos
      li Limpo
      li Sujeira
      li Papagaio
      li Explanar
      li Minguante
      li Anarquia
      li Querida
      li Curva
      li Encaixe
      li Fios
      li Altivo
      li Penumbra
      li Pressa
      li Nevoeiro
      li Chocolate
      li Trilha
      li Forja
      li Tendão
      li Fofoca
      li Caranguejo
      li Fagulha
      li Constelação
      li Represa
      li Orelha
      li Cravejado
      li Respirar
      li Cume

</template>

<style>
  .sketchtember {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-family: 'Permanent Marker';
  }
  img {
    max-width: 300px;
  }
  p, li {
    font-family: 'Playfair Display';
    font-size: 120%;
  }
</style>

<script>
  import vueMeta from '../../components/meta.vue'
  import facebookApp from '../../components/facebook-app.vue'

  export default {

    data () { 
      return {
      }
    },
    components: { 
      vueMeta,
      facebookApp, 
    },

    async asyncData () {
      

      return {
        meta: {
          title: "sketchtember 2023",
          description: "Site pessoal.",
          thumbnail: "",
          url: ``,
          type: "home"
        },
      }
    }
  }
</script>