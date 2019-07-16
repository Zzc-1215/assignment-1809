<template>
    <div class="baifenbai">
        <span @click="back" style="font-size:0.4rem;float:left;">返回</span><p style="font-size:0.5rem;width:8rem;height:1rem;margin:0 auto;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{title}}</p>
        <iframe>

        </iframe>
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
    .baifenbai{
        width: 100%;
        height: 18.875rem;
    }
    .baifenbai iframe{
        width: 100%;
        height: 18.875rem;
    }
</style>