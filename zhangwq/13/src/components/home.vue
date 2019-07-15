<!-- <template>
  <div>
    <nav-bar></nav-bar>
    <div class='news-list'>
    
    </div>
  </div>
</template>


<script>
import navBar from './navBar.vue'
export default{
  components:{
    navBar
  },
}



<script>

<style> -->
<template>
    <div>
			<div style="height: 50px;position: fixed;left: 0;top: 0;right: 0;background: #fff;">
				<nav-bar :data='menu' @indexChange="i=$event"></nav-bar>
			</div>
        
        <!-- <div> -->
					<ul class="news-list">
						<li v-for='(item,index) in newsList[i]' :key='index'>
							<p>{{item.title}}</p>
							<img :src="item.imgs[0]" alt="">
							<img :src="item.imgs[1]" alt="">
							<img :src="item.imgs[2]" alt="">
							<p class="text-muted">{{item.author}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</p>
						</li>
					</ul>
				<!-- </div> -->
    </div>
</template>

<script>
import navBar from './navBar.vue'

export default {
	data(){
		return{
			i:0,
			menu:['推荐','数字','字母','推荐','推荐','推荐','推荐'],
			newsList:[
				[
					{
						title:'新闻标题放假日123',
						imgs:['1.jpg','1.jpg','3.jpg'],
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					}
				],
				[
					{
						title:'新闻标题放假日nihaehfaslifwreaoisr',
						imgs:['1.jpg','1.jpg','3.jpg'],
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'edftgefrgthjhg',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'edrftgyhu',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'2345678765t4r3eqsdfghfdc',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					}
				],
				[
					{
						title:'123456787654321345676543',
						imgs:['1.jpg','1.jpg','3.jpg'],
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					}
				],
				[
					{
						title:'abcdefghjhgfdsdfghj',
						imgs:['1.jpg','1.jpg','3.jpg'],
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'123456789hbgvfcdxz',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					}
				],
				[
					{
						title:'新闻标题放假日',
						imgs:['1.jpg','1.jpg','3.jpg'],
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					}
				],
				[
					{
						title:'新闻标题放假日',
						imgs:['1.jpg','1.jpg','3.jpg'],
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					},{
						title:'新闻标题放假日',
						imgs:['http://img2.imgtn.bdimg.com/it/u=1409224092,1124266154&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=27&gp=0.jpg','https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604711864,1859130880&fm=27&gp=0.jpg'],
						author:'作者',
						time:'一天前',
					}
				],
			]
		}
	},
  components: {
    navBar
  },
}
</script>

<style>
	ul.news-list{
		margin-top: 50px;
	}
	ul.news-list>li{
		padding: 10px 20px;
		border-bottom: 3px solid #ccc;
	}
	ul.news-list>li p{
		line-height: 3rem;
		font-size: 1.4em;
	}
	ul.news-list>li img{
		width:30%;
		height:200px;
		margin: 10px 1.5%;
	}
	.text-muted{
		color: #aaa;
		font-size: 0.8em;
	}
</style>