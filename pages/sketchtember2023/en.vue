<template lang="pug">
.sketchtember
  link(href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Playfair+Display&display=swap" rel="stylesheet")
  h1 sketchtember 2023

  img(src="@/static/sketch/tratado.png" alt="Espada de bambu sendo segurada por duas mãos")

  .description
    p
      | I'm participating Sketchtember 2023.
      | I don't know if somebody is keeping this in other place. So, I'm lauching my own prompts.
    
    h2 Where it will be published?
    p I'm putting all my works in my Mastodon Account, inside
      a(href="https://ursal.zone/tags/sketchtember2023")
        |#Sketchtember2023 hashtag
    
    h2 Rules
    p Rules are shared with URSAL's server rules: 
    ul
      li Put description in all media.
      li Set Content Warning in NSFW work

    p Other rules:
    ul
      li List is not obligatory, it's just for incentive to drawing. If you can't do it all day, create in alternate days, or once per week.
      li Sketchtember is about sketching. No need to art-finalize.
      li Compare your work with yourself yesterday, before compare with other artists. Be kind to yourself.
  
    
    h2 prompts

  ol(type="1")
    li Hands
    li Clear
    li Dirt
    li Parrot
    li Explain
    li New Moon
    li Anarquy
    li Darling
    li Curve
    li Socket
    li Threads
    li Arrogant
    li Twilight
    li Hurry
    li Fog
    li Chocolate
    li Trail
    li Forge
    li Tendon
    li Gossip
    li Crab
    li Spark
    li Constelation
    li Dam
    li Ear
    li Studded
    li Breath
    li Top
    li ---
    li ---
  
  .entries
    entries

  .comments
    #disqus_thread

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
        this.page.url ='https://amosbatista.com/sketchtember2023/en';  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = 'sketchtember2023-en'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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