<template>
    <div id="new">
        <div id="header">
            <div class="swiper-container" id="swiper1">
                    <ul class="swiper-wrapper dataList">
                        <li class="swiper-slide" v-for="l in num.future" :key="l.date-'1'" id="cen">
                        <span id="font">
                                          
                            </span>
                        <p id="riqi">{{l.date}}</p>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box
}
#new{
    width: 100%;
    background: pink
}
</style>

