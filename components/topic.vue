<script>

    export default {

        data: function () {
            return {}
        },

        props: ['title']
    }

</script>


<template>
    
    <div class="topic">
        <h3 class="title topic-title">{{title}}</h3>
        <div class="content">
            <slot>
            </slot>
        </div>
    </div>

</template>


<style lang="less">

    @import "../assets/variables.less";

    .topic{
        width: 90%;
        margin: 0 0 10px 0;
        padding: 10px;
        display: inline-block;

        .topic-title{
            font-family: @title-font;
            text-transform: lowercase;
            color: @color-primary-light;
            padding-left: 20px;
            font-size: 150%;
            letter-spacing: -1px;
        }
        .content{
            padding-left: 10px;
            margin: 0;
        }

        @media (min-width: 768px){
            margin: 0 0 30px 0;

            .topic-title{
                float: left;
                margin: 0;
                text-align: right;
                padding-left: 20px;
                max-width: 25%;
            }

            .content{
                float: right;
                width: 64%;
            }
        }
    }

</style>