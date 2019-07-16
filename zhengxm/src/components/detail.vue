<template>
    <div>
        <div class="head">
            <router-link :to="{path:'/'}"><span><</span></router-link>
            
        </div>
        <iframe :src="$store.state.count" width="100%" height="800px"></iframe>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>