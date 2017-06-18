<template>
	<div class="login">
		<div class="new_wrapper">
		     <form data-view="loginView"> 
		    	 <div class="new_register">
		    		<div data-propertyname="username" data-controltype="Phone" style="display: block;">
		    			<input type="text" placeholder="已验证手机/邮箱" class="border_btm r_email top" v-model="username" @focus="hideerror('ushowing')">
		    			<span v-show="ushowing" data-valid-message class="input_tips">请输入有效账号</span>
		    		</div>
		    		<div data-propertyname="password" data-controltype="Password" style="display: block;">
						<div>
							<input type="password" placeholder="密码" class="r_psw btm" maxlength="16" v-model="password" @focus="hideerror('pashowing')">
							<i class="eye" :class="{openeye:closeeye}" @click="changeeye"></i>
						</div>
		    			<span data-valid-message class="input_tips" v-show="pashowing">请输入密码</span>
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
		    		<input type="button" class="btn_green" value="登录" @click="login">
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
				closeeye: false,
				ushowing: false,
				pashowing: false,
				username: '',
				password: ''
			}
		},
		methods:{
			changeeye:function(event){
				let a = document.getElementsByTagName(event.target.tagName)[0].parentNode.children;
				if(this.closeeye){
					this.closeeye = false;
					a[0].type = 'password';
				}else{
					this.closeeye = true;
					a[0].type = 'text';
				}
			},
			login:function(){
				let vm = this;
				this.testing(this.username,this.password);
				// this.$http.post('https://passport.lagou.com/login/login.json',{isValidate:true,username:vm.username,password})
			},
			testing:function(u,p){
				let regPhone = /^(0|86|17951)?((13[0-9]|15[012356789]|17[0135678]|18[0-9]|14[57])[0-9]{8})$/;
				let regEmail =  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
				let regparseword = /^[\\S\\s]{6,16}$/;
				if(!regPhone.test(u)&&!regEmail.test(u)){
					this.ushowing = true;
					return ;
				}
				if(!regparseword.test(p)){
					this.pashowing = true;
					return ;
				}
			},
			hideerror:function(a){
				console.log(a);
				if(a==='ushowing'){
					this.ushowing = false;
				}else{
					this.pashowing = false;
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
		    		span{
		    			position: absolute;
					    right: 5%;
					    top: 36%;
					    font-size: 0.7em;
					    color: #f94e4e;
					    line-height: 1.2;
		    		}
		    		[data-valid-message]{
		    			right: 13%;
    					top: 42%;
		    		}
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