<template>
	<div id="footer">
		<ul class="navbar">
	      <router-link to="/" tag="li" exact><i class="icon01"></i><span>职位</span></router-link>
	      <router-link to="/search" tag="li"><i class="icon02"></i><span>搜索</span></router-link>
	      <router-link to="/mine" tag="li"><i class="icon03"></i><span>登录</span></router-link>
	    </ul>
	</div>
</template>
<script>
	export default{
		name:'footer'
	}
</script>
<style lang="less">
@base: (640/750)/40rem;//rem是最后算出结果的单位
#footer{
	  width:100%;
	  position:fixed;
	  bottom:0;
	  left:0;
}
.text-center(){
  text-align:center;
}
.flex-block() {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.flex(@args: none) {
    -webkit-flex: @args;
    -moz-flex: @args;
    -ms-flex: @args;
    -webkit-flex: @args;
    flex: @args;

}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
.navbar{
	.flex-block();
  li{
    .text-center();
    .flex(@args:1);
    line-height: 45px;
    font-size: 50*@base;
    color:#c2cfcc;
    background:#f6f6f6;
    i{
      display:inline-block;
      width:18px;
      height: 17px;
      margin-bottom:-2px; 
      background:url(./../assets/icon2.png) no-repeat  -32px -2.5px;
      background-size:250px 250px;
    }
    .icon02{
      background-position: -14px -2.5px;
    }
    .icon03{
      background-position: -52.5px -2px;
    }
  }
}
.navbar .router-link-active{
    color:#00b38a;
    background-color:#e7f3f0;
    .icon01{
      background-position: -32px -20.5px;
    }
    .icon02{
      background-position: -14px -20.5px;
    }
    .icon03{
      background-position: -52.5px -19.5px;
    }
}
</style>
