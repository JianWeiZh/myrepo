<template>
	<div id="address">
		<mt-header title="拉勾网">
		  <router-link to="/search" slot="left">
		  	 <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div id="fulldialog-conid-1" class="fdialog-content">
			<div class="fdialog-rcon">
				<!--通用城市组件模板@author pooky@lagou.com-->
				<div class="cities-header">热门城市</div>
				<table class="cities-list">
					<thead><tr><th></th><th></th><th></th></tr></thead>
					<tbody>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="北京">北京</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="上海">上海</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="广州">广州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="深圳">深圳</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="成都">成都</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="杭州">杭州</td>
						</tr>
					</tbody>
				</table>
				<div class="cities-header">ABCDEF</div>
				<table class="cities-list">
					<thead><tr><th></th><th></th><th></th></tr></thead>
					<tbody>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="保定">保定</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="北京">北京</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="包头">包头</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="长春">长春</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="成都">成都</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="重庆">重庆</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="长沙">长沙</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="常州">常州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="池州">池州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="东莞">东莞</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="大连">大连</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="东营">东营</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="德州">德州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="佛山">佛山</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="阜阳">阜阳</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="福州">福州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
						</tr>
					</tbody>
					</table>
						<div class="cities-header">GHIJ</div>
						<table class="cities-list">
						<thead><tr><th></th><th></th><th></th></tr></thead>
						<tbody>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="桂林">桂林</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="贵阳">贵阳</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="广州">广州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="赣州">赣州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="哈尔滨">哈尔滨</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="合肥">合肥</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="呼和浩特">呼和浩特</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="海口">海口</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="杭州">杭州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="惠州">惠州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="湖州">湖州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="金华">金华</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="江门">江门</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="济南">济南</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="济宁">济宁</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="嘉兴">嘉兴</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
						</tr>
						</tbody></table><div class="cities-header">KLMN</div><table class="cities-list"><thead><tr><th></th><th></th><th></th>
						</tr>
						</thead><tbody><tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="开封">开封</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="昆明">昆明</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="聊城">聊城</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="廊坊">廊坊</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="拉萨">拉萨</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="丽水">丽水</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="临沂">临沂</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="洛阳">洛阳</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="兰州">兰州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="柳州">柳州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="绵阳">绵阳</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="梅州">梅州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="宁波">宁波</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="南昌">南昌</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="南京">南京</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="南宁">南宁</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="南通">南通</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="南阳">南阳</td>
						</tr>
						</tbody></table><div class="cities-header">OPQR</div><table class="cities-list"><thead><tr><th></th><th></th><th></th>
						</tr>
						</thead><tbody><tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="青岛">青岛</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="秦皇岛">秦皇岛</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="黔南">黔南</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="泉州">泉州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
						</tr>
						</tbody></table><div class="cities-header">STUV</div><table class="cities-list"><thead><tr><th></th><th></th><th></th>
						</tr>
						</thead><tbody><tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="韶关">韶关</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="上海">上海</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="石家庄">石家庄</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="汕头">汕头</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="绍兴">绍兴</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="沈阳">沈阳</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="三亚">三亚</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="深圳">深圳</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="苏州">苏州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="天津">天津</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="唐山">唐山</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="太原">太原</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="台州">台州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="泰州">泰州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
						</tr>
						</tbody></table><div class="cities-header">WXYZ</div><table class="cities-list"><thead><tr><th></th><th></th><th></th>
						</tr>
						</thead><tbody><tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="潍坊">潍坊</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="武汉">武汉</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="芜湖">芜湖</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="威海">威海</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="乌鲁木齐">乌鲁木齐</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="无锡">无锡</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="温州">温州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="西安">西安</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="许昌">许昌</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="香港特别行政区">香港特别行政区</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="厦门">厦门</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="西宁">西宁</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="新乡">新乡</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="咸阳">咸阳</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="徐州">徐州</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="银川">银川</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="盐城">盐城</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="宜昌">宜昌</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="烟台">烟台</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="扬州">扬州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="淄博">淄博</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="珠海">珠海</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="湛江">湛江</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="镇江">镇江</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="张家口">张家口</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="肇庆">肇庆</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="中山">中山</td>
						</tr>
						<tr class="cities-list-item">
							<td class="activeable cities-item" @click="getAddress($event)" data-item="郑州">郑州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="漳州">漳州</td>
							<td class="activeable cities-item" @click="getAddress($event)" data-item="&nbsp;">&nbsp;</td>
						</tr>
						</tbody></table></div></div>
		<HtmlFooter></HtmlFooter>
	</div>
</template>
<script>
	import HtmlHeader from "./HtmlHeader"
	import HtmlFooter from './HtmlFooter'
	export default {
		name:"address",
		components:{HtmlHeader,HtmlFooter},
		data(){
			return {}
		},
		methods:{
			getAddress:function(e){
				let str = e.target.innerHTML;
				localStorage.setItem("address",str);
				this.$router.push('/search');
			}
		}
	}
</script>
<style lang="less">
	@base: (640/750)/40rem;
	.fdialog-container .fdialog-content{
		height: 100%;
	    background-color: #fff;
	    overflow: scroll;
	}
	.fdialog-container .fdialog-rcon{
	    margin-bottom: 45px;
	}
	.cities-header{
		border-bottom: 1px solid #e8e8e8;
	    height: 25px;
	    line-height: 25px;
	    padding: 0 15px;
	    font-size: 36*@base;
	    color: #888;
	}
	.cities-list{
	    width: 100%;
    	border-bottom: 1px solid #e8e8e8;
	}
	table{
	    border-collapse: collapse;
    	border-spacing: 0;
	    border-color: grey;
	}
	thead{
	    display: table-header-group;
	    vertical-align: middle;
	    border-color: inherit;
	}
	.cities-item{
	    height: 60px;
	    line-height: 60px;
	    text-align: center;
	    font-size: 46*@base;
	    color: #333;
	    min-width: 100px;
	}
</style>