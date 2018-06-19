<template>
  <div>
    <Header></Header>
    <div class="container all-info-con">
    		<div class="row">
    			<div class="school-news">
    				<div class=" col-sm-10">
    					<div class="module-title">
    						<span class="sh-title">校园新闻</span>
    						<a class="readmore">MORE <i class="fa fa-plus" aria-hidden="true"></i></a>
    					</div>
    				</div>

    				<div class="clearfix"></div>
    				<!-- pc端新闻轮播图 -->
    				<div class="col-sm-4 news-carousel" style="width:42%">
    					<div class="swiper-container hidden-xs">
    				        <div class="swiper-wrapper">
    				            <div class="swiper-slide" :title="value.title"  v-for="(value,key) in list" v-if="key <= 2"><img class="rollimg" src="../../static/images/fig4.jpg"><span class="more-info">{{ value.title }}</span></div>

    				        </div>
    				        <!-- Add Pagination -->
    				        <div class="swiper-pagination hidden-xs"></div>
    				        <!-- Add Arrows -->
    				        <!-- <div class="swiper-button-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
    				        <div class="swiper-button-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div> -->
    				    </div>
    				</div>
    				<div class="col-sm-6"  style="width:58%;padding-left: 20px;">

    					<div class="sh-news">
    						<div class="news-item"  v-for="(value,key) in list" v-if="key <= 2">
    							<div class="news-date hidden-xs">
    								<p>{{$utils.qyDate(value.create_at)}}</p>
                    <p>{{$utils.qyYM(value.create_at)}}</p>
    							</div>
    							<div class="news-date visible-xs">
    								<div class="scale-xs">
    									<img src="../../static/images/fig5.jpg">
    								</div>
    							</div>
    							<div class="news-intr">
    								<p><router-link :to="'/news/'" :title="$utils.goodTime(value.create_at)" target="_blank">{{ value.title }}</router-link></p>
    								<div>{{value.author.loginname}}</div>
    							</div>
    						</div>

    				</div>

    				</div>
    				<div class="clearfix"></div>

    				<div class="flex" style="margin-top: 20px;">
    					<div class="col-sm-3">
    						<div class="more-info-con">
    							<div class="module-title">
    								<span class="sh-title">通知公告</span>
    								<a class="readmore">MORE <i class="fa fa-plus" aria-hidden="true"></i></a>
    							</div>
    							<div class="announcement">
    								<div class="news-item" v-for="(value,key) in list" v-if="key <= 2">
    									<div class="news-date">
    										<p>{{$utils.qyDate(value.create_at)}}</p>
    										<p>{{$utils.qyYM(value.create_at)}}</p>
    									</div>
    									<div class="news-intr">
    										<div onclick="location.href='notice_and_announcement.html'" :title="value.title">{{ value.title }}</div>
    									</div>
    								</div>
    						</div>
    						</div>
    					</div>
    					<div class="col-sm-3">
    						<div class="more-info-con">
    							<div class="module-title">
    								<span class="sh-title">校务公开</span>
    								<a class="readmore">MORE <i class="fa fa-plus" aria-hidden="true"></i></a>
    							</div>
    							<ul class="news-list">
    								<li v-for="(value,key) in list" v-if="key <= 5">
    									<a href="school_affairs_disclosure.html" :title="value.title"><i class="fa fa-caret-right" aria-hidden="true"></i>{{value.title}}</a><span>{{value.create_at.slice(5,10)}}</span>
    								</li>
    							</ul>
    						</div>
    					</div>
    					<div class="col-sm-3">
    						<!-- pc端 -->
    						<div class="more-info-con">
    							<div class="module-title">
    								<span class="sh-title">学校应用</span>
    							</div>
    							<ul class="sh-app  hidden-xs">
    								<li onclick="location.href='http://www.ks5u.com'">
    									<p><img src="../../static/images/qy001.png"></p>
    									<p>高考资源网</p>
    								</li>
    								<li onclick="location.href='http://edu.wanfangdata.com.cn'">
    									<p><img src="../../static/images/qy002.png"></p>
    									<p>万方数字图书</p>
    								</li>
    								<li onclick="location.href='http://wx.eamn.net'">
    									<p><img src="../../static/images/qy003.png"></p>
    									<p>教育装备管理</p>
    								</li>
    								<li onclick="location.href='http://czda.jyjy.net.cn/usercenter_stuLoginView.html'">
    									<p><img src="../../static/images/qy004.png"></p>
    									<p>成长档案信息管理</p>
    								</li>
    								<li onclick="location.href='http://www.jste.net.cn/cmsplus/index.html'">
    									<p><img src="../../static/images/qy005.png"></p>
    									<p>江苏教师教育培训</p>
    								</li>
    								<li onclick="location.href='http://www.jyjyyp.com'">
    									<p><img src="../../static/images/qy006.png"></p>
    									<p>江阴教育云盘</p>
    								</li>
    							</ul>
    							 <!-- app端 -->
    							<div class="visible-xs app-lists">
    							  <table class="app-table">
    							  	<tr>
    							  		<td>
    							  			<div>
    								  			<p><img src="../../static/images/qy001.png"></p>
    											<p>高考资源网</p>
    							  			</div>
    							  		</td>
    							  		<td>
    							  			<div>
    								  			<p><img src="../../static/images/qy002.png"></p>
    											<p>万方数字图书</p>
    							  			</div>
    							  		</td>
    							  		<td>
    							  			<div>
    								  			<p><img src="../../static/images/qy003.png"></p>
    											<p>教育装备管理</p>
    							  			</div>
    							  		</td>
    							  	</tr>
    							  	<tr>
    							  		<td>
    							  			<div>
    								  			<p><img src="../../static/images/qy004.png"></p>
    											<p>成长档案信息管理</p>
    							  			</div>
    							  		</td>
    							  		<td>
    							  			<div>
    											<p><img src="../../static/images/qy005.png"></p>
    											<p>江苏教师教育培训</p>
    							  			</div>
    							  		</td>
    							  		<td>
    							  			<div>
    											<p><img src="../../static/images/qy006.png"></p>
    											<p>江阴教育云盘</p>
    							  			</div>
    							  		</td>
    							  	</tr>
    							  </table>
    						  </div>
    					  </div>
    				</div>
    			</div>
    			</div>
    			<div class="clearfix"></div>
    		</div>
    	</div>

    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData();
    document.title = '首页';
  },
  mounted(){
  // 初始化轮播图
  		var swiper = new Swiper('.swiper-container', {
  			pagination: '.swiper-pagination',
  	        nextButton: '.swiper-button-next',
  	        prevButton: '.swiper-button-prev',
  	        paginationClickable: true,
  	        spaceBetween: 30,
  	        centeredSlides: true,
  	        autoplay: 6000,
  	        autoplayDisableOnInteraction: false,
  	        loop: true
  	    });

  		$(function(){
  			//初始化省略号插件
  			$('.news-intr div').dotdotdot();

  			//判断访问的浏览器是pc还是手机
  			function isMobile() {
  			    var userAgentInfo = navigator.userAgent;

  			    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

  			    var mobile_flag = false;

  			    //根据userAgent判断是否是手机
  			    for (var v = 0; v < mobileAgents.length; v++) {
  			        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
  			            mobile_flag = true;
  			            break;
  			        }
  			    }

  			     var screen_width = window.screen.width;
  			     var screen_height = window.screen.height;

  			     //根据屏幕分辨率判断是否是手机
  			     if(screen_width < 500 && screen_height < 800){
  			         mobile_flag = true;
  			     }

  			     return mobile_flag;
  			}
  			//设置手机端“学校应用”的模块，宽=高
  			if(isMobile()){
  				var w=$('.app-table div').width();
  				$('.app-table div').css('height',w+10);
  			}

  		})
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
