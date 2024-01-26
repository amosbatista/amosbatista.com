<script>

    import topic from '../components/topic.vue'
    import pgHeader from '../components/pageSimpleHeader-portfolio.vue'
    import myLink from '../components/myLink.vue'
    import vueMeta from '../components/meta.vue'
    import linkStyle from '../components/external-link-style.vue'
    import facebookApp from '../components/facebook-app.vue'
    import pgFooter from '../components/pageFooter.vue'

    export default {

        components: {
            pgHeader, topic, myLink, vueMeta, linkStyle, facebookApp, pgFooter
        },

        props: ['title', 'description', 'meta', 'repoUrl'],

        data: function () {
            return {}
        }
    }

</script>

<template>

    <div class="portfolio-layout">

        <vue-meta :metadata="meta" />

        <facebook-app />

        <link-style />

        <pg-header />


        
        <h1 class="title title-portfolio">{{title}}</h1>
        

        <div class="topics">

            <topic title="O que é?">
                <div class="topic-content">
                    <slot name="whatsIsThis"></slot>
                </div>
            </topic>

            <topic title="A Necessidade">
                <div class="topic-content">
                    <slot name="necessity"></slot>
                </div>
            </topic>

            <topic title="Concorrentes">
                <div class="topic-content">
                    <slot name="competitor"></slot>
                </div>
            </topic>

            <topic title="O conceito">
                <div class="topic-content">
                    <slot name="concept"></slot>
                </div>
            </topic>

            <topic title="O desenvolvimento">
                <div class="topic-content">
                    <slot name="development"></slot>
                </div>
            </topic>

            <topic title="Retrô">
                <div class="topic-content">
                    <slot name="retro"></slot>
                </div>
            </topic>

            <topic title="Fonte">
                <div class="topic-content">
                    <slot name="source"></slot>
                </div>
            </topic>
        </div>
        
        <pg-footer />
        
    </div>
</template>



<style lang="less">

    @import '../assets/fontawesome/fontawesome.less';
    @import '../assets/variables.less';
    @import '../assets/mixin.less';
    @import '../assets/generic.less';
    @import '../assets/base.less';
    @import '../assets/objects.less';

    .portfolio-layout{
        .title-portfolio{
            margin: 100px 0;
        }
    }

    .topic-content{
      font-family: @base-font;
      color: @color-primary;
      margin: 0;
    
      p{
          margin: 0 0 10px 0;
          text-indent: 20px;
      }

      a{
          text-decoration: underline;
      }
    }
</style>
