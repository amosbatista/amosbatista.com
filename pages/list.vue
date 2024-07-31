<script setup>
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOriginIsolated: true},
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap' }
  ]
})
</script>
<template>

  <div class="lists-container">
    <div class="list">
      <h3>Watch list (série)</h3>
      <ul class="list-content">
        <li>
          <p class="list-item-title">Baymax</p>
          <a href="https://www.disneyplus.com/pt-br/movies/big-hero-6/4AozFbXy3sPw?irclickid=1r5xaBw9%3AxyKRNgTY%3A0V0y7oUkCz2JRm9yW6w80&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0101000b-55ac-4cba-a200-0d6666aa9c95&dclid=CPPxmJ6N0ocDFWWqlQIdQm4Ppw">
            https://www.disneyplus.com/pt-br/movies/big-hero-6/4AozFbXy3sPw?...
          </a>
          <p class="list-item-description">Filme que quero assistir.</p>

        </li>
        <li>Rin</li>
      </ul>
    </div>
  </div>

</template>

<style>
  *{
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings:
      "wdth" 100;
  }
  .lists-container {
    width: 90%;
    margin: 20px auto;
  }
  .list {
    width: 100%;
    border: 1px solid #dbcaca;
    border-radius: 0px 0px 10px 0px;
    padding: 10px;
  }
  h3 {
    text-align: center;
  }
  .list-content {
    list-style-type: disclosure-closed;
  }
</style>