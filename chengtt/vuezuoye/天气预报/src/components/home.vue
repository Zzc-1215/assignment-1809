<template>
	<div class="box">
		<header class="header">
			<i class="iconfont icon-fanhui-copy"></i>
			<span>墨迹天气</span>
			<div class="right">
				<i class="iconfont icon-sangedian"></i> |
				<i class="iconfont icon-yuanquan"></i>
			</div>
		</header>
		<div class="search">
			<i class="iconfont icon-fangdajing1"></i>
			<input type="search" placeholder="请输入城市名，快速查询天气信息" v-model='city'>
			<span @click="city=''">取消</span>
		</div>
		<ul v-show='city' class='searchList'>
			<li v-if='searchCitys.length==0' style='text-align:center;font-size:0.24rem'>很遗憾，未找到该城市</li>
			<li v-else v-for='(s,index) in searchCitys' :key="index+'aa'" @click="jumpHome(s)">
				{{s.text}}
			</li>
		</ul>
		<div class="city" v-show='!city'>
			<h2>猜你想找</h2>
			<div class="loading" v-if="citys.length<=0" >加载中...</div>
			<ul class="host-list-box" v-else>
				
				<li  v-for="(item,index) in citys" :key="item.id+'id'" v-if="item.province==item.district&&item.province!='吉林'"  @click="jumpHome(item)">
					{{item.province}}
					
				</li>
				
			</ul>
			<h2>
        历史记录
        <span v-if="histroyCity.length" @click="clearHistory">
          <i class="iconfont icon-lajitong"></i>
          清空历史纪录
        </span>
      </h2>
			<ul v-if="histroyCity.length">
				<li v-for="c in histroyCity" :key="c.id+'h'" @click="jumpHome(c)">{{c.district}}</li>
			</ul>
		</div>
	</div>

</template>
<script>
	export default {
		created() {
			console.log(this.axios);
			this.getCitys();
		},

		data() {
			return {
				searchCitys: [],
				city: '',
				histroyCity: [],
				selectCity: 0,
				citys: [],
				
			};
		},
		computed: {
			computedCitys() {
				var arr = [];
				this.citys.forEach(el => {
					arr.push({
						'id': el.id,
						'text': el.province + ' ' + el.city + ' ' + el.district
					})
				})
				return arr
			}
		},
		watch: {
			city(v1, v2) {
				if(v1) {
					this.computedCitys.forEach(el => {
						if(el.text.indexOf(v1) > -1) {
							this.searchCitys.push(el);
						}
					})
				} else {
					this.searchCitys = [];
				}
			}
		},
		methods: {
			jumpHome(city) {
				console.log(city)
				this.selectCity = city.id;
				if(localStorage.histroyCitys) {
					if(localStorage.histroyCitys.indexOf(this.selectCity) == -1) {
						localStorage.histroyCitys += '|' + this.selectCity;
					}
				} else {
					localStorage.histroyCitys = this.selectCity;
				}

				// var isPush = true;
				// this.histroyCity.forEach(element => {
				//   if (element.id == city.id) {
				//     isPush = false;
				//   }
				// });
				// if (isPush) {
				//   this.histroyCity.push(city);
				// }
				this.$router.push({
					name: "weather",
					params: {
						city
					}
				});
			},
			clearHistory() {
				this.histroyCity = [];
				localStorage.histroyCitys = '';
			},
			getCitys() {
				var getUrl = "/weather/citys?key=6a18c9f5015c0831ea3e6d2a938afe1b";
				this.axios.get(getUrl).then(response => {
					this.citys = response.data.result;
					this.$nextTick(() => {
						this.getHistoryCitys();
					});
				})
			},
			getHistoryCitys() {
				var hcs = localStorage.histroyCitys;
				if(hcs) {
					var arr = hcs.split('|');
					this.citys.forEach(element => {
						arr.forEach(el => {
							if(element.id == el) {
								this.histroyCity.push(element)
							}
						})
					})
				}
			}
		}
	};
</script>
<style scope>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		box-sizing: border-box;
	}
	
	.clearfix:after,
	.clearfix:before {
		content: "";
		display: table;
	}
	
	.clearfix:after {
		clear: both;
	}
	
	.clearfix {
		zoom: 1;
	}
	
	.box {
		width: 7.5rem;
		height: auto;
	}
	
	.header {
		width: 100%;
		height: 1.15rem;
		padding: 0.3rem;
		/* 水平居中 */
		display: flex;
		align-items: center;
		position: relative;
	}
	
	.header>i {
		display: inline-block;
		margin-right: 0.3rem;
		font-size: 0.34rem;
	}
	
	.header>span {
		color: #000;
		font-size: 0.3rem;
	}
	
	.header .right {
		width: 1.93rem;
		height: 0.65rem;
		border: 0.01rem #ccc solid;
		position: absolute;
		right: 0.3rem;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 0.15rem;
		font-size: 0.2rem;
		color: #ccc;
		line-height: 0.65rem;
	}
	
	.header .right>i {
		display: inline-table;
		margin: 0 0.3rem;
		color: #000;
		font-size: 0.34rem;
	}
	
	.search {
		width: 100%;
		height: 0.7rem;
		padding: 0 0.3rem 0.1rem 0.3rem;
		border-bottom: 0.01rem #ccc solid;
		position: relative;
	}
	
	.search>input {
		width: 85%;
		height: 0.55rem;
		border: none;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
		border-radius: 0.15rem;
		padding-left: 0.5rem;
		padding-right: 0.2rem;
		float: left;
		outline: none;
		font-size: 0.24rem;
	}
	
	.search>i {
		position: absolute;
		left: 0.4rem;
		top: 0.11rem;
		font-size: 0.34rem;
	}
	
	.search>span {
		width: 15%;
		height: 0.55rem;
		font-size: 0.24rem;
		text-align: center;
		line-height: 0.55rem;
		float: left;
	}
	
	.city {
		width: 100%;
		padding: 0 0.3rem;
	}
	
	.city>h2 {
		margin-top: 0.4rem;
		font-size: 0.32rem;
	}
	
	.city>ul {
		display: flex;
		flex-wrap: wrap;
	}
	
	.city>ul>li {
		width: 2.1rem;
		height: 0.55rem;
		border-radius: 0.15rem;
		background-color: #f2f2f2;
		font-size: 0.24rem;
		text-align: center;
		margin-top: 0.2rem;
		margin-right: 0.28rem;
		line-height: 0.55rem;
	}
	
	.city>ul>li:nth-child(3n) {
		margin-right: 0;
	}
	
	.city>h2>span {
		float: right;
		font-size: 0.24rem;
	}
	
	.city>h2>span>i {
		margin-right: 0.05rem;
	}
	
	.city>h2>span>i {
		font-size: 0.34rem;
	}
	
	.selected {
		background: rgb(1, 155, 245);
	}
	
	.searchList>li {
		line-height: 0.6rem;
		border-bottom: 1px #ccc solid;
		padding: 0.2rem;
		font-size: 0.24rem;
	}
	.hot-list-box{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0.3rem;
  }
  .hot-list-box li{
    height: 0.59rem;
    width: 2.19rem;
    border-radius: 0.1rem;
    margin-top: 0.16rem;
    text-align: center;
    line-height: 0.59rem;
    font-size: 0.25rem;
    background: #f2f2f2;
    border: 0.01rem #eee solid;
    box-sizing: border-box;
    margin-right: 0.11rem;
  }
  .hot-list-box .active{
    background: #4393ec;
    color: #fff;
    border: 0.01rem #6ba3e3 solid;
  }
</style>