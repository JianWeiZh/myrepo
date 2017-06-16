<template>
  <div class="hello">
    <HtmlHeader></HtmlHeader>
    <div id="content">
      <div class="custom-info none" style="display: block;">
          <span class="info">
              10秒钟定制职位
          </span>
          <a class="go" href="javascript:;" target="_self" @click="tologin">
              <em class="icon"></em>
              <em class="text">去登录</em>
          </a>
      </div>
      <ul class="list">
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
        <li class="activeable list-more" v-on:click="loaded(loadmore,$event)">加载更多</li>
      </ul>
      <div id="copyright"><p>©2015 lagou.com, all right reserved </p><div class="copyright-item"><span class="phone active">移动版&nbsp;·&nbsp;</span><span class="computer">电脑版&nbsp;·&nbsp;</span><a href="#header">回顶部</a></div></div>
    </div>
    <div id="push_bottom" class="animated" style="display: block;">
        <div class="push_bottom_table">
            <a class="push_bottom_download" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.alpha.lagouapk&amp;ckey=CK1337790743204" target="_blank">
                <div class="push_bottom_row">
                    <div class="push_bottom_cell push_logo">
                        <img src="//www.lgstatic.com/m/images/asset/custom/list/img/download_logo_new.png" width="100%" alt="lagou.com">
                    </div>
                    <div class="push_bottom_cell push_tips">
                        <img src="//www.lgstatic.com/m/images/asset/custom/list/img/download_txt_new.png" width="100%" alt="拉勾 机会很多 挑满意的 手机投简历，在线聊Offer">
                    </div>
                    <div class="push_bottom_cell push_btn">
                        <img src="//www.lgstatic.com/m/images/asset/custom/list/img/download_btn_new.png" width="100%" alt="下载APP">
                    </div>
                </div>
                <div class="push_mascot">
                    <img class="push_mascot_img" src="//www.lgstatic.com/m/images/asset/custom/list/img/download_mascot.png" width="100%" alt="拉勾君">
                    <img class="close_btn" src="//www.lgstatic.com/m/images/asset/custom/list/img/transparent.png" width="100%" alt="关闭">
                </div>
            </a>
        </div>
    </div>
    <HtmlFooter></HtmlFooter>
  </div>
</template>

<script>
import HtmlHeader from "./HtmlHeader"
import HtmlFooter from './HtmlFooter'
export default {
  mounted:function(){
    this.loadding();
  },
  name: 'hello',
  data () {
    return {
      pageNum: 2,
      pageSize: 15,
      msgList:[],
      loadmsg: "加载更多",
      loadmore: "加载中...",
      baseUrl:"//www.lgstatic.com/"
    }
  },
  components:{HtmlHeader,HtmlFooter},
  methods:{
    loadding:function(e,a){
      let that = this;
      let url = "/listmore.json?pageNo="+ this.pageNum + "&pageSize=" + this.pageSize;
      this.$http.get(url).then((res)=>{
        let jsonobj = JSON.parse(res.bodyText);
        let state = jsonobj.state;
        if(state==1){
          that.pageNum++;
          var result = jsonobj.content.data.page.result;
          result.map(function(val){
            that.msgList.push(val);
          })
          if(a){
            e.target.innerHTML = that.loadmsg;
          }
        }
      })
    },
    loaded:function(a,e){
      e.target.innerHTML = a;
      this.loadding(e,true);
    },
    tologin:function(){
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@base: (640/750)/40rem;
//rem是最后算出结果的单位  640为对应的屏幕宽度   750为当前设计稿的宽度，用设计稿100%的宽度来测量比较方便  40暂时还未清楚
//@rex: 5rem/12; /* 640的设计图时: 5rem/12;   750的设计图时: 16rem/45 */
.mint-header{
  height: 45px;
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 56*@base;
  text-align: center;
  position: relative;
}
#content {
  margin-bottom: 45px;
  .custom-info{
  border-bottom: 1px solid #e8e8e8;
  height: 43px;
  line-height: 43px;
  padding: 0 15px;
  color: #555;
  font-size: 42*@base;
  position: relative;
  .info{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-right: 100px;
    height: 100%;
    position: relative;
  }
  .go{
    position: absolute;
    right: 15px;
    top: 0;
    display: block;
    float: right;
    background-color: #f5f5f5;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    color: #00b38a;
    border-radius: 15px;
  }
}
}
#content .custom-info:after,.list .list-item:after，.list .item-info:after,#push_bottom .push_bottom_table .push_bottom_row:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.list{
  .list-item{
    padding: 14px;
    border-bottom: 1px solid #e8e8e8;
    .item-logo{
      display: inline-block;
      float: left;
      width: 60px;
      height: 60px;
    }
    .item-desc{
      margin-left: 70px;
      height: 62px;
      color: #333;
      .item-title{
        font-size: 50*@base;
        margin-bottom: 6px;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight:bold;
      }
      .item-info{
        margin-bottom: 6px;
        width: 100%;
        height: 15px;
        line-height: 15px;
        .item-pos{
          font-size: 38*@base;
          float: left;
          width: 60%;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-salary{
          font-size: 46*@base;
          color: #00b38a;
          float: right;
        }
      }
      .item-time{
        font-size: 36*@base;
        color: #888;
      }
    }
  }
  .list-more{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 50*@base;
    background-color: #fafafa;
    color:#333;
  }
}
#push_bottom{
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 45px;
  width: 100%;
  height:67px;
  background-color: rgba(14,14,14,0.9);
  color: #fff;
  z-index: 999;
  .push_bottom_table{
      position: relative;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      padding: 3.3% 2.5%;
      .push_bottom_cell{
        float:left;
        img{
          display:block;
        }
      }
      .push_logo{
        margin-right: 2%;
        width: 12%;
      }
      .push_tips {
        width: 52%;
      }
      .push_btn {
        float: right;
        width: 27.5%;
      }
      .push_mascot {
        position: absolute;
        top: 0;
        right: 6.5%;
        width: 14%;
        z-index: 2;
        .push_mascot_img {
          display: block;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
  }
}
#copyright{
  text-align: center;
  font-size: 32*@base;
  margin-top: 30px;
  padding-bottom: 40px;
  color: #333;
  .copyright-item{
    height: 32px;
    line-height: 32px;
    span.item{
      color: #999;
    }
    a{
      color: #333;
    }
  }
}
</style>
