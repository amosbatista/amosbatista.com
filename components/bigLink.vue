<script>

    import titleParagraph from '../components/title-paragraph.vue'

    export default {

        data: function () {
            return {}
        },
        props: ["url", "iconClass"],
        components: { titleParagraph }
    }

</script>


<template>

    <a class="big-link git-hub-color" :href="url" target="_blank">

        <div class="icon">

            <i :class="iconClass" />
        </div>

        <div class="url">

            <title-paragraph :content="url" />
        </div>
    </a>

</template>


<style lang="less">

    @import "../assets/variables.less";

    .git-hub-color{

        .icon{
            color: @color-primary;
        }
        .url{
            color: @color-primary;
        }
    }

    .big-link{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;

        .icon{
            padding: 20px 10px;
            display: inline-block;
        }
        .url{
            padding: 20px 10px;
            font-size: 50%;
            display: inline-block;

            .title {
                padding: 0;
            }
        }
    }

    

</style>
