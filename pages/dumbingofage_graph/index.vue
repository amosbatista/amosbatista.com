<template lang="pug">
  .doa

    styles

    graph-component


    .toggle-button(v-on:click="mustShowText = !mustShowText")
      i.fa.fa-eye

    .text-box(v-if="mustShowText")
      h1
        | Dumbing of Age - The graph
      p.desciption
        | In 11 years full of dramatic webcomic, a lot of characters have passed through our lives. Loving, hating, playing, mocking... Exactly as our mundane lives. But, in this David M Willis modern-day soap opera, how much are they connected to each other? This graph will help. 
      p.description
        b
          |Zoom-in inside this image and click on each character  
        |to see who interacted with who, and how often!!
      
      

      .questions-zone
        p.sub-title Q & A
        .questions
          p.question What's Dumbing of Age?
          p.answer It's a webcomic, created by David M Willis on September 10th, 2010. You can read it at this link: 
            a(href="https://www.dumbingofage.com/") https://www.dumbingofage.com/
        
        .questions
          p.question What's a "graph"? 
          p.answer It's a kind of computer drawing that shows 
            b nodes 
            | (in this case, the characters), and 
            b edges, 
            | that show the relations between two people. A thicker edge shows that these 2 characters have interacted more often.
        
        .questions
          p.question How did you make it?
          p.answer I created a 
          b crawler, 
          | a bot that read every page of Dumbing of Age, and read the tag area that shows the names of all the characters that appear on any given page.
          
        p.question Ok, you can make it more geeky...
          p.answer This page and the crawler were made using javaScript. The crawler loads each page and specific HTML tags are search using 
            b cheerio 
            | library. After generated nodes and edges into 2 json files, I past these files into this graph, built by 
            b vis.js 
            | library. 
            
        .questions
          p.question So, it's not a "relationship" graph, but only a counter of how many characters have been shown in each page?
          p.answer Kind of. But it can be for relationships too, because it's rare for 2 characters to appear in one page and not talk to each other. 
          
        .questions
          p.question That only shows the main characters. There are a lot more.
          p.answer Yes, but I have to limit the character list to those that appear in at least 7 pages. Showing all the people could make this graph even slower.
        
        .questions
          p.question Why did you make it?
          p.answer I love Dumbing of Age, graphs and front-end development. So I wanted to make this work together.
          
        .questions
          p.question Are you expanding this graph? Can I make a suggestion to you?
          p.answer Yes, if I have time, I'll improve it, for sure. And yes, you can make your sugestion. I'll hear and do it, if it is possible.
            br 
            |You can even make your edition and open a Pull Request into the repository.
          
        .questions
          p.question Where can I find this crawler?
          p.answer
            a(href="https://github.com/amosbatista/dumbingofage_thecrawler") You can find it here. 
            
        p.question And this page?
          p.answer
            a(href="https://github.com/amosbatista/amosbatista.com/tree/master/pages/dumbingofage_graph") It's inside my website's repo, but you can go directly to the page.
      
      .thank-notes
        p.sub-title Thank notes
        ul
          li
            b Milu 
            |(
            a(href="https://github.com/miluyali") https://github.com/miluyali
            |,  
            a(href="https://miluburner@protonmail.com/") https://miluburner@protonmail.com
            |) for taking the iniciative to review all text.
      
      .update-note
        p.sub-title Updates
        ul
          li
            i v1.1
          ul.update
            li Thank note for user Milu.
            li Fixed some missed classes on style.
            li Inserted links to repository.
            li Raised character threshould to 7.

          li
            i v2.0
          ul.update
            li Graph extended to full page size.
            li Fixed avatar visualization
      
      .returning-home
        p.return.sub-title
          a(href="/") Return to home 
        
</template>

<script>
import graphComponent from './components/graph';
import styles from '../../components/external-link-style.vue'

export default {
  components: { graphComponent, styles },
  data () { return { 
    mustShowText: true
  }}
}
</script>

<style lang="less">
  @import '../../assets/generic.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/objects.less';
  @import '../../assets/base.less';

  .doa {
    .toggle-button {
      color: @color-secundary;
      position: absolute;
      top: 30px;
      right: 30px;
      z-index: 2;
      width: 50px;
      height: 50px;
      font-size: 25px;
      border: 1px solid @color-primary;
      display: flex;
      align-items: center;
      justify-content: center;
    }
        
    .text-box {
      background-color:@color-base-dark;
      position: absolute;
      top: 40px;
      right: 20px;

      width: 65vw;
      height: 50vh;

      overflow-y: scroll;
      z-index: 1;
      border-radius: 15px;
      .shadow();
    }
  }
  h1 {
    font-family: @title-font;
    color: @color-primary;
    line-height: 72px;
    font-size: 300%;
    letter-spacing: -5px;
    text-align: center;
  }
  
  p, ul {
    margin: 10px 5%;
    text-indent: 20px;
    font-family: @base-font;
    color: @color-secundary;
  }
  
  .questions-zone {
    margin: 50px 0;
    
    .questions {
      margin-bottom: 30px;
    }
    
    .question {
      color: @color-terciary;
      font-style: italic;
      &:before {
        content: "Q: "
      }
    }
    
    .answer {
      &:before {
        content: "A: "
      }
    }
  }
  
  .update-note {
    .update li{
     list-style: disc; 
    }
  }
  
  .sub-title {
    color: @color-terciary;
    font-size: 130%;
    margin: 35px 5%;
  }
</style>
