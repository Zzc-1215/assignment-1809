<template>
    <div style="width:100%;height:736px;">
        <span @click="back" style="width:20%;font-size:20px;font-weight:bold;text-align:center;display:inline-block;"><</span>
        <h3 style="font-size:18px;height:50px;line-height:50px;width:80%;text-algin:center;over-flow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;">{{title}}</h3>
        <iframe src="" style="width:100%;height:100%;"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url:this.$store.state.itemurl.url,
            title:this.$store.state.itemurl.title
        }
    },
    methods: {
        back(){
            location.href="http://localhost:8080/#/";
        }
    },
    mounted() {
        this.$el.children[2].src=this.url;
    },
}
</script>

<style>
    
</style>