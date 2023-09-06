<template lang="pug">
.sketchtember
  link(href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playfair+Display&display=swap" rel="stylesheet")
  h1 sketchtember 2023

  img(src="@/static/sketch/tratado.png" alt="Espada de bambu sendo segurada por duas mãos")

  .description
    p
      | Este ano, vou participar do Sketchtember 2023. 
      | Não sei se está organizado em algum outro site. Por este motivo, estou lançando meus próprios prompts, me comprometendo a criar uma obra para eles.
    
    h2 Onde será publicado?
    p Estou centralizando na minha conta do Mastodon. Acompanhe os trabalhos dentro 
      a(href="https://ursal.zone/tags/sketchtember2023")
        |da hashtag #Sketchtember2023
    
    h2 Regras
    p As regras se baseiam nas do servidor da Ursal: 
    ul
      li Coloque descrição em todas as imagens.
      li Coloque aviso de conteúdo em caso de imagem para adultos (NSFW)

    p Demais regras:
    ul
      li A lista não é obrigação, é mais para nos incentivar a desenhar. Se não puder todo dia, desenhe um dia sim outro não, ou uma vez por semana.
      li O sketchtember trata de rascunhos. Mesmo se precisar de tinta, pense neste detalhe.
      li Compare com seu trabalho de ontem, antes de se comparar com outres artistes. Seja gentil com você.
  
    
    h2 prompts

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
    li ---
    li ---
  
  #disqus_thread
  script.
    //-RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    //- LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    /**
  
    var disqus_config = function () {
      this.page.url = 'https://amosbatista.com/sketchtember2023';  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = 'sketchtember2023_pt'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://amosbatista.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

</template>

<style lang="less">
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
    text-align: left;
  }
  ol{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;

    li {
      margin: 8px 0 0;
      size: 120%;
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