<<template>
    <div>
        <button @click="change">test</button>
        {{count}}---{{Ccount}}
        {{$store.state.count}}
    </div>
</template>
<<script>
export default {
    data () {
        return {
            count: this.$store.state.count,
            Ccount: this.$store.getters.Ccount
        }
    },
    // computed: {
    //     _count(){
    //         return this.count+1;
    //     }  
    // },
    methods: {
        change(){
            // this.$store.state.count = 2;
            // mutation
            // this.count = 2;
            // this.$store.commit('add',10);

            this.$store.dispatch('addFun',3)
        }
    }
}
</script>