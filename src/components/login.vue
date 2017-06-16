<template>
	<div class="login">
		<div class="new_wrapper">
		     <form data-view="loginView"> 
		    	 <div class="new_register">
		    		<div data-propertyname="username" data-controltype="Phone" style="display: block;">
		    			<input type="text" placeholder="已验证手机/邮箱" class="border_btm r_email top">
		    		</div>
		    		<div data-propertyname="password" data-controltype="Password" style="display: block;">
						<div>
							<input type="password" placeholder="密码" class="r_psw btm" maxlength="16">
							<i class="eye" :class="{openeye:closeeye}" @click="changeeye"></i>
						</div>
		    			
		    		</div>
		    		
	    		</div>
		    	 <!-- 验证码  -->
		         <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style="display:none;">
		            <input type="text" id="vcode" name="vcode" tabindex="3" placeholder="请证明你不是机器人">
		            <img src="" width="113" height="42" id="vcodeImg">
		            <a>看不清楚，<em>换一张</em></a>    
		             <span class="error" style="display:none;" id="vcodeError"></span> 
		         </div> 
		         <!-- 验证码  -->
		    	 <div data-propertyname="submit" data-controltype="Botton" style="display: block;">
		    		<input type="button" class="btn_green" value="登录">
		    	</div> 
		    	
		     </form>
	    	<div class="register_text">还没帐号？</div>
		    <a href="../register/register.html" class="btn_green_border">注册</a>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'login',
		data(){
			return {
				closeeye:false
			}
		},
		methods:{
			changeeye:function(){
				if(this.closeeye){
					this.closeeye = false;
				}else{
					this.closeeye = true;
				}
			}
		}
	}
</script>
<style lang="less">
	.login{
		width:100%;
		height:100%;
		position:absolute;
	    background: -webkit-gradient(linear,100% 100%,0 0,from(#029253),to(#00887b));
	    background: -webkit-linear-gradient(135deg,#029253,#00887b);
		// background: -moz-linear-gradient(left 135deg,#029253,#00887b);
	 //    background: -o-linear-gradient(135deg,#029253,#00887b);
	 	.new_wrapper{
 		    width: 90%;
		    padding: 20px 0;
		    margin: 0 auto;
		    form{
		    	display:block;
		    	margin-top:0em;
		    	.new_register{
		    		position:relative;
		    		div{
		    			position:relative;
		    			input{
	    				    width: 90%;
    						border: 0;
						    outline: 0;
						    font: 1em "黑体";
						    color: #333;
						    background: #fff;
						    -moz-border-radius: 0;
						    -webkit-border-radius: 0;
						    border-radius: 0;
						    padding: 6% 5%;
						    margin: 0;
		    			}
		    			.border_btm{
		    				border-bottom: 1px solid #e0e0e0;
		    			}
		    			.top{
	    				    -moz-border-top-left-radius: 5px!important;
						    -webkit-border-top-left-radius: 5px!important;
						    border-top-left-radius: 5px!important;
						    -moz-border-top-right-radius: 5px!important;
						    -webkit-border-top-right-radius: 5px!important;
						    border-top-right-radius: 5px!important;
		    			}
		    			.btm{
	    				    -moz-border-bottom-left-radius: 5px!important;
						    -webkit-border-bottom-left-radius: 5px!important;
						    border-bottom-left-radius: 5px!important;
						    -moz-border-bottom-right-radius: 5px!important;
						    -webkit-border-bottom-right-radius: 5px!important;
						    border-bottom-right-radius: 5px!important;
		    			}
		    			i.eye{
	    				    width: 20px;
						    height: 13px;
						    background: url(//img.lagou.com/passport/static/mobile/modules/common/img/psweye_930f545.png) 0 0 no-repeat;
						    background-size: 20px 30px;
						    position: absolute;
						    bottom: 33%;
						    right: 5%;
						    -moz-transition: transform .3s linear 0s;
						    -webkit-transition: transform .3s linear 0s;
						    -o-transition: transform .3s linear 0s;
						    transition: transform .3s linear 0s;
		    			}
		    			i.openeye{
	    				    background: url(//img.lagou.com/passport/static/mobile/modules/common/img/psweye_930f545.png) 0 -16px no-repeat;
						    background-size: 20px 30px;
						    -moz-transform: scale(1.1,1.1);
						    -webkit-transform: scale(1.1,1.1);
						    -o-transform: scale(1.1,1.1);
						    -ms-transform: scale(1.1,1.1);
						    transform: scale(1.1,1.1);
		    			}
		    		}
		    	}
		    	.btn_green{
		    		border:0;
				    display: block;
				    width: 100%;
				    font-size: 1.1em;
				    color: #fff;
				    text-align: center;
				    background: #0ac599;
				    -webkit-box-shadow: 0 2px 0 #008765;
				    -moz-box-shadow: 0 2px 0 #008765;
				    box-shadow: 0 2px 0 #008765;
				    -moz-border-radius: 5px;
				    -webkit-border-radius: 5px;
				    border-radius: 5px;
				    margin: 20px 0;
				    padding: 5%;
    			}
		    }
		    .register_text{
		    	color: #45e3be;
			    font-size: 0.8em;
			    line-height: 1.3;
		    }
		    .btn_green_border{
	    	    display: block;
			    width: 90%;
			    font-size: 1.1em;
			    color: #45e3be;
			    text-decoration: none;
			    text-align: center;
			    border: 1px solid #45e3be;
			    -moz-border-radius: 5px;
			    -webkit-border-radius: 5px;
			    border-radius: 5px;
			    margin: 8px 0;
			    padding: 5%;
		    }
	 	}
	}
</style>
</html>