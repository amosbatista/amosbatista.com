<script>

  export default {

    data: function () {
      return {
          links: [
              {
                  text: "amosbatista.com",
                  url: "/"
              },
              {
                  text: "portfolio",
                  url: "/portfolio"
              },
              {
                  text: "topo",
                  url: "#"
              }
          ]
      }
    }
  }

</script>


<template lang="pug">

  .fluid-footer
    a.link(v-for="(link, key) in links" :href="link.url")
      |{{key > 0 ? "  /   " : ""}} {{link.text}}  
    br
    span.link.thanks
      |obrigado pela visita

        
</template>


<style lang="less">

  @import '../assets/variables.less';
  @import '../assets/mixin.less';

  .fluid-footer{
      padding: 25px;
      background-color: @color-primary;
      float: left;
      width: 100%;
      box-sizing: border-box;

      .link{
          color: @color-base;
          font-family: @base-font;
          font-size: 100%;
          letter-spacing: -1px;
          font-weight: @base-font-weigh-bold;
      }

      .thanks {
        font-size: 50%;
      }
  }
    
</style>