<template>
	<div id="searce">
		<HtmlHeader></HtmlHeader>
		<div id="content02">
	        <div class="linputer">
	            <div class="lbutton">
	                <span class="city" @click="addresss($event)">{{address}}</span>
	                <span class="cityicon"></span>
	            </div>
	            <div class="rinput">
	                <input class="inputer" v-model="srcName" type="text" placeholder="搜索职位或公司" @keyup="listenVal($event)" @keydown.enter="srcCom($event)">
	                <span class="search" @click="srcCom($event)"><em class="searchicon"></em></span>
	            </div>
	        </div>
	        <div class="listcon">
	            <ul class="history" v-show="srcName.length==0">
		            <li class="activeable history-item" v-for="(item,index) in srcHistory">
		            	<span class="text" :data-name="item"  @click="reloadSrc(item)">{{item}}</span>
		            	<div class="delcon" :data-name="item" @click="removeList(index)"><span class="delicon"></span></div>
		            </li>
		            	
		        </ul>
	            <ul class="list" v-show="msgList.length!=0">
	            	<div class="custominfo none" style="display: block;">
		                将搜索地区和关键词设为定制条件
		            </div>
		            <li v-for="(item,index) in msgList" :key="item.id" class="activeable list-item" :data-positionid="item.positionId" :data-companyid="item.companyId">
			            <img :src="baseUrl + item.companyLogo" class="item-logo">
			            <div class="item-desc">
			                <h2 class="item-title">{{item.companyName}}</h2>
			                <p class="item-info">
			                    <span class="item-pos">
			                        {{item.positionName}} [ {{item.city}} ]
			                    </span>
			                    <span class="item-salary">{{item.salary}}</span>
			                </p>
			                <p class="item-time">{{item.createTime}}</p>
			            </div>
			        </li>
	            </ul>
	            <div>{{time}}</div>
	        </div>
		</div>
    	<HtmlFooter></HtmlFooter>
	</div>
</template>
<script>
	import HtmlHeader from './HtmlHeader'
	import HtmlFooter from './HtmlFooter'
	export default {
		mounted:function(){
			let str = localStorage.getItem("address");
			let str01 = localStorage.getItem("srcHistory")?localStorage.getItem("srcHistory"):"";
			let that = this;
			if(str!=null){
				this.address = str;
			}else{
				this.address = "全国";
			}
			if(str01.length>0){
				let arr = str01.split(",");
				arr.map(function(val,index){
					if(index == arr.length-1)
						return
					that.srcHistory.push(val);
				})
			}
		},
		name:'search',
		data(){
			return {
      			baseUrl:"//www.lgstatic.com/",
				srcName: "",
				address: "全国",
				srcHistory: [],
				msgList: [],
				time:""
			}
		},
		components:{HtmlHeader,HtmlFooter},
		// watch:{
		// 	srcName:function(old,oldVal){
		// 		console.log(old,oldVal);
		// 	}
		// },
		methods:{
			srcCom:function(e){
				let str = this.srcName;
				let str01 = this.address;
				let url = "/search.json?city="+ str01 +"&positionName="+str+"&pageNo=1&pageSize=15";
				this.$http.get(url).then((res)=>{
					let oldSrcName = localStorage.getItem("srcHistory");
					let newSrcName;
					if(oldSrcName&&oldSrcName.length!=null){
						newSrcName = oldSrcName+this.srcName+',';
					}else{
						newSrcName = this.srcName + ',';
					}
					newSrcName = this.unique(newSrcName.split(","));
					localStorage.setItem("srcHistory",newSrcName);
					let obj = JSON.parse(res.bodyText);
					let state = obj.state;
					if(state==1){
						let arr = obj.content.data.page.result;
						this.msgList = arr;
					}
				})
			},
			addresss:function(e){
				this.$router.push('/search/address');
			},
			listenVal:function(e){
				if(this.srcName.length==0){
					let srcHistory = localStorage.getItem("srcHistory")?localStorage.getItem("srcHistory").split(","):"";
					if(srcHistory&&srcHistory!=null&&srcHistory.length!=0){
						this.srcHistory = [];
						srcHistory.map((val,index)=>{
							if(index == srcHistory.length-1){
								return
							}
							this.srcHistory.push(val);
						})
					}
				}else{
					this.msgList = [];
				};
			},
			unique:function(a){
				let arr = [];
				let json = {};
				for(let i=0;i<a.length;i++){
					if(!json[a[i]]){
						arr.push(a[i]);
						json[a[i]] = 1;
					}
				}
				return arr;
			},
			removeList:function(index){
				this.srcHistory.splice(index,1);
				localStorage.setItem("srcHistory",this.srcHistory);
			},
			reloadSrc:function(val){
				this.srcName = val;
				this.srcCom();
			}
		}
	}
</script>
<style lang="less">
	@base: (640/750)/40rem;
	input{
		outline:none;
	}
	li{
		list-style:none;	
	}
	#content02{
	    margin-bottom: 45px;
	    .linputer{
    	    position: relative;
		    border-bottom: 1px solid #e8e8e8;
		    height: 45px;
		    .lbutton{
	    	    float: left;
			    height: 45px;
			    line-height: 45px;
			    font-size: 46*@base;
			    text-align: center;
			    width: 88px;
			    border-right: 1px solid #e8e8e8;
			    span{
		    	    display: inline-block;
			    }
			    .cityicon{
		    	    width: 8.5px;
				    height: 7px;
				    background: url(./../assets/icon.png) no-repeat -1px -2.5px;
    				background-size: 250px 250px;
			    }
		    }
		    .rinput{
		    	height: 45px;
			    margin-left: 89px;
			    position: relative;
			    .inputer{
			    	display: block;
				    border: none;
				    padding: 10px 0;
				    height: 25px;
				    line-height: 25px;
				    color: #333;
				    width: 75%;
				    margin: 0 0 0 5%;
				    font-size: 46*@base;
				    float: left;
			    }
			    .search{
		    	    display: inline-block;
				    width: 20%;
				    height: 45px;
				    line-height: 45px;
				    float: right;
				    position: relative;
				    .searchicon{
			    	    display: block;
					    margin: 14px auto 0 auto;
					    width: 17px;
					    height: 17px;
					    background: url(./../assets/icon.png) no-repeat -14px -2.5px;
					    background-size: 250px 250px;
				    }
			    }
		    }
	    }
	    .history{
	    	background-color: #fafafa;
    		color: #666;
    		.history-item{
    			height: 45px;
			    line-height: 45px;
			    font-size: 42*@base;
			    border-bottom: 1px solid #e8e8e8;
			    padding: 0 0 0 23px;
    		}
    		.text{
    			display: inline-block;
			    height: 45px;
			    text-overflow: ellipsis;
			    overflow: hidden;
			    width: 75%;
    		}
    		.delcon{
			    float: right;
			    width: 40px;
			    height: 45px;
			    text-align: center;
			    width: 14%;
    		}
    		.delicon{
    			display: inline-block;
			    height: 10px;
			    width: 12px;
			    background: url(./../assets/icon.png) no-repeat -71.5px -4px;
			    background-size: 250px 250px;
    		}
	    }
	  //   .listcon{
			// .custominfo {
			//     height: 35px;
			//     line-height: 35px;
			//     font-size: 1.4rem;
			//     color: #5d897e;
			//     background-color: #e7f7f3;
			//     text-align: center;
			//     margin-top: 16px;
			//     margin-bottom: 14px;
			// }
	  //   }
	  	.custominfo {
  		    height: 35px;
		    line-height: 35px;
		    font-size: 40*@base;
		    color: #5d897e;
		    background-color: #e7f7f3;
		    text-align: center;
		    margin-top: 16px;
		    margin-bottom: 14px;
	  	}
	}
	#content .linputer:after,#content .rinput:after,#content .history .history-item:after{
		content: ".";
	    display: block;
	    height: 0;
	    clear: both;
	    visibility: hidden;
	}
</style>