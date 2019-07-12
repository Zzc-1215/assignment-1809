<template>
  <div class="home">
    <headlist :list="menu"></headlist>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import headlist from '@/components/headlist.vue'

export default {
  name: 'home',
  data(){
    return {
      menu:['推荐','科技','IT','推荐','科技','IT'],
    }
  },
  components: {
    HelloWorld,
    headlist
  }
}
</script>
