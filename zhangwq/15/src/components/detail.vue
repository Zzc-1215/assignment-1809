<template>
    <div style="height:100%;">
        <div class="top"><i><router-link to="/" style="text-decoration: none;color: #000;"><</router-link></i>标题</div>
        <div style="height:100%;">
            <div>
                <!-- {{item.vurl}} -->
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
    // data(){
	// 	return{
    //         currentType:'',
    //         lists:[]
	// 	}
	// },
    // created() {
    //     this.getNewsList();
    // },
    // methods:{
	//   getNewsList(event){
	// 	this.currentType = event;
	// 	this.axios.get('/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0').then((res)=>{
    //         console.log(res.data.data);
    //         this.lists = res.data.data;
    //     })
    //  }   
    // },
}
    
</script>

<style>
.top{
    width: 100%;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.3rem;
    border-bottom: 1px solid #ccc;
}
.top i{
    float: left;
    font-size: 0.3rem;
    margin-left: 0.4rem;
    font-style: normal;
}
</style>
