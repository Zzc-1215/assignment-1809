<template>
	<div>
		<div style="position: fixed;top:0;background:#ff0;">
			<nav-bar :data="menu" @indexchange="i=$event"></nav-bar>
		</div>
		<ul class="news-list">
			<li v-for="(item,index) in newlist[i]" :key="index+itemm">
				<p>{{item,title}}</p>
				<div>
					<img :src="item.imgs[0]" all />
					<img :src="item.imgs[1]" all />
					<img :src="item.imgs[2]" all />
				</div>
				<p class="text-muted">{{item.author}}--{{item.time}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import newBar form "./navBar.vue"
	export default{
		data(){
			return{
				i:0,
				menu:["推荐","热门","科技"],
				newlist:[
					[
						{
							title:"没什么说明书",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},{
							title:"没什么说明书",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},{
							title:"没什么说明书",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},
					],[
						{
							title:"111115555",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},{
							title:"111115555",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},{
							title:"111115555",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},
					],[
						{
							title:"aaaaaabbbbbbb",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},{
							title:"aaaaaabbbbbbb",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},{
							title:"aaaaaabbbbbbb",
							imgs:["1.jpg","2.jpg","3.jpg"],
							author:"xxx",
							time:"一天前"
						},
					],
				]
			}
		},
		components:{
			navBar
		}
	}
</script>

<style scoped>
	ul.news-list li p {
  line-height: 1.4em;
  margin-bottom: 10px;
}
ul.news-list {
  margin-top: 50px;
}
ul.news-list li {
  padding: 20px;
  border-bottom: 10px solid #ccc;
}
ul.news-list li img {
  display: inline-block;
  width: 30%;
  margin-right: 3%;
  height: 100px;
  border: 1px solid red;
}
.text-muted {
  color: #ccc;
  font-size: 0.8em;
}
</style>
