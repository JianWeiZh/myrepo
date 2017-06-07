<template>
	<div id="header">
		<mt-header title="拉勾网"></mt-header>
	</div>
</template>
<script>
	export default{
		name:'header'
	}
</script>
<style lang="less">
@base: (640/750)/40rem;//rem是最后算出结果的单位
.mint-header{
  height: 45px;
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 56*@base;
  text-align: center;
  position: relative;
}
</style>