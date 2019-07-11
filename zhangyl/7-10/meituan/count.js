Vue.component('count', {
    template: `
    <div class="box">
        <span v-show="v" class="prev" @click="prev">-</span>
        <input v-show="v" type="text" class="int" v-model="v">
        <span class="next" @click="next">+</span>
    </div>
    `,
    props: ['value', 'step', 'max', 'min'],
    data() {
        return {
            v: this.value || 0,
        }
    },
    watch: {
        v(val, oldvalue) { //监听v的变化 暴露给父组件(要更改value值)
            if (val >= this.max) {
                val = this.max
            }
            if (val <= this.min) {
                val = this.min
            }
            this.$emit('input', val)
        },
    },
    methods: {
        next() { //点击加
            if (this.v >= this.max) {
                this.v = this.max;
                return;
            }
            this.v += this.step || 1;
        },
        prev() { //点击减
            if (this.v <= this.min) {
                this.v = this.min
                return;
            }
            this.v -= this.step || 1;
        }
    }
})