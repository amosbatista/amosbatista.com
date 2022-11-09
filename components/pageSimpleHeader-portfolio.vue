<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>


<template lang="pug">

  header.title

    span.home
      a(href="/")
        |home 
    span.separator
      |\
    a.portfolio(href="/portfolio")
      | portfolio
</template>


<style lang="less" scoped>
    
  @import "../assets/variables.less";
  @import '../assets/objects.less';
   
  header {
    font-size: 60%;
    padding: 20px 0 0 0;
  }

  .home {
    color: hsl(250, 85%, 45%);
    font-size: 60%;
  }

  .separator {
    color: hsl(249, 45%, 65%);
    margin: 0 8px 0 4px;
    font-size: 60%;
  }

  .portfolio {
    color: hsl(250, 25%, 75%);
    font-size: 60%;
  }

</style>