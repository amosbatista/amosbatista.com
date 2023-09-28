<template lang="pug">
.kinktober
  link(href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playfair+Display&display=swap" rel="stylesheet")
  h1 kinktober 2023

  .description
    p
      | Estava me preparando para o Inktober 2023.
      | Porém, ainda não fui convencido de que a lista oficial de Jake Parker seria, na verdade, plágio do Alphonso Dunn.

    p Por isto, decidi criar uma lista própria.

    p Só que, junto com um pessoal que estava participando comigo, sugeriram criar uma lista para trabalhos mais íntimos, sensuais. 
    p Seguindo a sugestão, e como já trabalhei muito com desenhos artísticos, decidi criar a lista para o kinktober.
    
    h2 FAQ em construção

    p Demais regras:
    ul
      li A lista não é obrigação, é mais para nos incentivar a desenhar. Se não puder todo dia, desenhe um dia sim outro não, ou uma vez por semana.
      li Compare com seu trabalho de ontem, antes de se comparar com outres artistes. Seja gentil com você.
  
    
    h2 prompts

  ol(type="1")
    li Mordida
    li Olhos
    li Espartilho
    li Bronzeado
    li Trapézio
    li Susto
    li Dourado
    li Beliscão
    li Tatuagem
    li Quadril
    li Brincadeira
    li Janela
    li Dança
    li Chifre
    li Azul
    li Santidade
    li Flores
    li Dedos
    li Virilha
    li Molhade
    li Dengo
    li Carro
    li Toalha
    li Fera
    li Pés
    li Nó
    li Sufocar
    li Cadeira
    li Atrás
    li Gula
    li Bruxaria

  .entries
    entries

  .comments
    #disqus_thread

</template>

<style lang="less">
  @bg-color: #fa40c1e8;

  body {
    background-color: @bg-color;
  }
  .kinktober {
    padding: 10px 75px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 500px) {
      padding: 10px 15px;
    }
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
    text-align: left;
  }
  ol{
    width: 100%;
    height: 615px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;

    li {
      margin: 8px 0 0;
      font-size: 30px;
    }
  }
  .description {
    padding: 20px 0;

    h2 {
      text-align: left;
      margin-top: 40px;
    }
    p {
      margin: 0 0 15px;
    }
  }

  .comments {
    width: 75%;
  }
</style>

<script>
  import vueMeta from '../../components/meta.vue'
  import facebookApp from '../../components/facebook-app.vue'
  import entries from './entries.vue'

  export default {

    data () { 
      return {
      }
    },
    components: { 
      vueMeta,
      facebookApp, 
      entries
    },
    mounted() {
      var disqus_config = function () {
        this.page.url ='https://amosbatista.com/sketchtember2023';  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = 'sketchtember2023-pt'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://sunday6pm.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
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