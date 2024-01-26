<script>

  import post from '~/components/post-title.vue'
  import box from '~/components/box.vue'

  import postTitle from '~/components/post-title.vue'
  import myLink from '~/components/myLink.vue'
  import pgHeader from '~/components/pageSimpleHeader-portfolio.vue'
  import vueMeta from '~/components/meta.vue'
  import linkStyle from '~/components/external-link-style.vue'
  import facebookApp from '~/components/facebook-app.vue'
  import pgFooter from '~/components/pageFooter.vue'

  export default {

    components: { postTitle, box, myLink, pgHeader, vueMeta, linkStyle, facebookApp, pgFooter },

    data: function () {
      return {
        meta: {
          title: "Portfolio",
          description: "Veja em detalhes os maiores projetos que participei",
          thumbnail: "https://amosbatista.com/thumbnails/portfolio.jpg",
          url: "/portfolio",
          type: "list"
        },
        portfolios: [
          {
            title: "Kofax Capture Migration",
            type: 'Refatoração', 
            resume: "(portuguese) Rebuild of digitalization work process in Iron Mountain do Brasil",
            url: "/portfolio/kofaxCapture"
          },

          {
            title: "MasterRow",
            type: 'Framework', 
            resume: "(portuguese) Vanilla-javascript tool for dinamyc tables",
            url: "/portfolio/masterrow"
          },

          {
            title: "AmosBatista.com",
            type: 'Website', 
            resume: "(portuguese) My professional website.",
            url: "/portfolio/amosBatista"
          },

          {
            title: "E-htl Executivo",
            type: 'Aplicativo', 
            resume: "(portuguese) Client managment app for turism. ",
            url: "/portfolio/ehtlexecutivo"
          },

          {
            title: "E-htl Dashboard",
            type: 'Website interno', 
            resume: "(portuguese) Development of corporative dashboard, for sales analisys and AWS comsume. ",
            url: "/portfolio/ehtldashboard"
          },

          {
            title: "Catho 2.0",
            type: 'Aplicativo',            
            resume: "(portuguese) Development of Catho's app comunication between candidate and recruiter. ",
            url: "/portfolio/cathoApp"
          }
        ]
      }
    }
  }

</script>

<template>

  <div class="container">
    <vue-meta :metadata="meta" />
    <facebook-app />
    <link-style />
    <pg-header />

    <ul class="list">
      <li class="item" v-for="post in portfolios" :key="post.title">
        <my-link :url="post.url">
          <p class="title">
            {{post.title}}
          </p>
          <p class="normal">
            {{post.resume}}
          </p>
        </my-link>
      </li>
    </ul>
    
    <pg-footer />
  </div>
</template>

<style lang="less" >
  @import '../../assets/base.less';
  @import '../../assets/generic.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/objects.less';

  @media(min-width: 768px) {
    .list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;

      .item {
        width: 350px;
      }
    }
    
  }
  
  .item {
    margin-bottom: 32px;  
  }

  .title {
    font-size: 120%;
  }
  p.normal {
   font-size: 75%;
   color: @color-primary-light;
   margin: 0; 
  }

</style>