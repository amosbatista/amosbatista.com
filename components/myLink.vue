<script>

    export default {

        data: function () {
            return {}
        },

        props: ['url']
    }

</script>


<template>
    
    <a class="my-link" :href="url">
        <slot></slot>
    </a>
</template>


<style lang="less">
    
    @import "../assets/variables.less";

    .my-link{
        width: 100%;
        text-decoration: underline;
        text-decoration-style: dotted;
        text-decoration-color: @color-primary;


        &:hover{
            text-decoration-style: dotted;
        }

    }

</style>