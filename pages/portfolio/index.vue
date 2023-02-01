<script>
  import linkStyle from '~/components/external-link-style.vue'

  export default {
    components: {
      linkStyle
    },
    data: function () {
        
    }
  }
</script>

<style lang="less">
  @import '../../assets/fontawesome/fontawesome.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/generic.less';
  @import '../../assets/base.less';
  @import '../../assets/objects.less';

  .portfolio{
    padding: 0 20px;
  }
  .title {
    font-size: 150%;
    text-align: center;
  }

  .subtitle {
    text-align: left;
    font-size: 100%;
  }

  .item {
    margin-top: 20px;
  }

  .link, .descricao {
    color: @color-primary;
    size: 80%;
  }

  .print {
    &:nth-of-type(2) {
      margin-left: 10px;
    }
  }
</style>

<template lang="pug">
  .portfolio
    link-style

    h1.title portfolio

    div.item
      h3.title.subtitle nerv informártica 
      p.link
        a(href="https://nerv-informatica.onrender.com/header2")
          |https://nerv-informatica.onrender.com/header2
      p.descricao
        |Redesenho de site de escola de informática.
      img.print(src="./nerv.png")

    
    div.item
      h3.title.subtitle Itaú 
      p.link
        a(href="https://itau.com.br")
          |https://itau.com.br
      p.descricao
        |Co-participação do redesenho e desenvolvimento das peças da home logada (Saldo e Cartão). 
      img.print(src="./itau-1.jpg")
      img.print(src="./itau-2.jpg")



</template>