<template>
	<div id="mine">
		<HtmlHeader></HtmlHeader>
		<div id="content01">
	        <div class="logininfo">
                <div class="nologin center">
                    <a class="loginbut" href="/frontLogin.do" target="_self">登录 / 注册</a>
                </div>
            </div>
	        <div class="buttons">
	            <a class="button deliver" href="/user/deliverlist.html">
	                <span>投递</span>
	            </a>
	            <a class="button interview" href="/minterview/interviewlist.html">面试</a>
	            <a class="button invitation" href="/minvite/invitation.html">
	                <span>邀约</span>
                </a>
	            <a class="button collect" href="/user/collectlist.html">收藏</a>
	        </div>
		</div>
    	<HtmlFooter></HtmlFooter>
	</div>
</template>
<script>
	import HtmlHeader from './HtmlHeader'
	import HtmlFooter from './HtmlFooter'
	export default {
		name: 'mine',
		components:{HtmlHeader,HtmlFooter}
	}
</script>
<style lang="less">
	@base: (640/750)/40rem;
	#content01{
	   	margin-bottom: 45px;
    	padding: 0 15px;
    	.logininfo{
    		margin: 10px 0;
    		.nologin{
    			height:111px;
    			.loginbut{
    				font-size: 42*@base;
				    color: #fff;
				    display: block;
				    width: 100%;
				    height: 45px;
				    line-height: 45px;
				    text-align: center;
				    margin: 0 auto;
				    background-color: #1fc8a1;
				    position: relative;
				    top: 33px;
    			}
    		}
    		.center{
			    text-align: center;
			    width: 125px;
			    margin: 0 auto;
    		}
    	}
    	.buttons{
		    margin-bottom: 10px;
		    .deliver,.invitation{
		    	float: left;
		    }
		    .interview,.collect{
		    	float: right;
		    }
		    .button{
		    	display: block;
			    width: 48%;
			    height: 86px;
			    line-height: 86px;
			    background-color: #1fc8a1;
			    text-align: center;
			    color: #fff;
			    font-size: 48*@base;
			    margin-top: 10px;
			    position: relative;
		    }
    	}
	}
	#content .buttons:after,#content:after{
	    content: ".";
	    display: block;
	    height: 0;
	    clear: both;
	    visibility: hidden;
	}
</style>