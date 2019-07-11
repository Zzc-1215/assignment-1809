<template>
  <div id="main">
			<div style='position:fixed;top:0;left: 0;background-color: #fff;'>
				<headlines :data="datam" @change="inxb=$event"></headlines>
			</div>
			<div id="main_xw">
				<ul>
						<li v-for="(item,index) in mian[inxb]">
								<h3>{{item.title}}</h3>
								<img :src="item.img[0]" alt="">
								<img :src="item.img[1]" alt="">
								<img :src="item.img[2]" alt="">
								<p>{{item.name}} &nbsp;&nbsp;&nbsp;{{item.tiem}}</p>
						</li>
				</ul>
			</div>
  </div>
</template>

<script>
				//headlines就是组件在dom上写入它就渲染上了../components/tt.vue里的数据
	import headlines from '../components/tt.vue'
	export default {
		components: {
			headlines
			},
			data(){
				return{
						inxb:0,
						datam:['推荐','推荐','推荐','推荐','推荐','推荐','推荐'],
						mian:[
							[
								{
									title:'哼，一个能打的都没有!',
									img:['http://img1.imgtn.bdimg.com/it/u=3782056315,3236875270&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=3428194538,2845169735&fm=26&gp=0.jpg','http://img4.imgtn.bdimg.com/it/u=3388223424,474756388&fm=26&gp=0.jpg'],
									name:'武器大师',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'刀光剑影，铁石心肠，只有你知道在隐雾下的我，还是那么脆弱，容易感伤。',
									img:['http://img4.imgtn.bdimg.com/it/u=2795311328,4146151290&fm=26&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=574605580,942325922&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=4008832201,2720386626&fm=26&gp=0.jpg'],
									name:'刀锋之影',
									tiem:'三分钟前',
								},
							],
							[
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'哼，一个能打的都没有!',
									img:['http://img1.imgtn.bdimg.com/it/u=3782056315,3236875270&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=3428194538,2845169735&fm=26&gp=0.jpg','http://img4.imgtn.bdimg.com/it/u=3388223424,474756388&fm=26&gp=0.jpg'],
									name:'武器大师',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'刀光剑影，铁石心肠，只有你知道在隐雾下的我，还是那么脆弱，容易感伤。',
									img:['http://img4.imgtn.bdimg.com/it/u=2795311328,4146151290&fm=26&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=574605580,942325922&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=4008832201,2720386626&fm=26&gp=0.jpg'],
									name:'刀锋之影',
									tiem:'三分钟前',
								},
							],
							[
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'哼，一个能打的都没有!',
									img:['http://img1.imgtn.bdimg.com/it/u=3782056315,3236875270&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=3428194538,2845169735&fm=26&gp=0.jpg','http://img4.imgtn.bdimg.com/it/u=3388223424,474756388&fm=26&gp=0.jpg'],
									name:'武器大师',
									tiem:'三分钟前',
								},
								{
									title:'我曾触摸过星辰,曾见证过数千个太阳的光芒,而如今我被这优雅蒙蔽了双眼,所以我的目标怎可能不黑暗',
									img:['http://img0.imgtn.bdimg.com/it/u=1578528214,2776410774&fm=26&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=3500872682,3686548333&fm=26&gp=0.jpg','http://img2.imgtn.bdimg.com/it/u=1416915206,404416626&fm=26&gp=0.jpg'],
									name:'剑魔',
									tiem:'三分钟前',
								},
								{
									title:'刀光剑影，铁石心肠，只有你知道在隐雾下的我，还是那么脆弱，容易感伤。',
									img:['http://img4.imgtn.bdimg.com/it/u=2795311328,4146151290&fm=26&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=574605580,942325922&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=4008832201,2720386626&fm=26&gp=0.jpg'],
									name:'刀锋之影',
									tiem:'三分钟前',
								},
							],
						]
				}
		},
	}
</script>
<style>
	#main_xw{
		width:100%;
		padding:0px 15px;
	}
	#main_xw ul{
		width:100%;
		padding:0;
		margin-top:80px;
	}
	#main_xw ul>li{
		list-style:none;
	}
	#main_xw ul>li h3{
		font-size: 20px;
	}
	#main_xw ul>li img{
		width: 220px;
		height: 150px;
		margin-right:10px;
	}
	#main_xw ul>li p{
		font-size: 15px;
		color: #ccc;
	}
</style>
