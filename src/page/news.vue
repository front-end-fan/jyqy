<template>
  <div>
    <myHeader></myHeader>

    <div class="container all-info-con">
    		<!-- pc端 -->
    		<div class="row hidden-xs">
    			<div class="col-sm-2 secondary-menu">
    				<div class="secondary-title">
    					校园动态
    					<a class="menus-toggle visible-xs">
    						<i class="fa fa-circle"></i>
    						<i class="fa fa-circle"></i>
    						<i class="fa fa-circle"></i>
    					</a>
    				</div>

    				<ul class="menus-toggle-list">
    					<li><a class="active" href="news.html">校园新闻<i class="fa fa-angle-right"></i></a></li>
    					<li><a href="notice_and_announcement.html">通知公告<i class="fa fa-angle-right"></i></a></li>
    					<li><a href="school_affairs_disclosure.html">校务公开<i class="fa fa-angle-right"></i></a></li>
    				</ul>

    				<div class="secondary-title latest-recommendation">
    					<span>最新推荐</span>
    					<a class="menus-toggle visible-xs">
    						<i class="fa fa-circle"></i>
    						<i class="fa fa-circle"></i>
    						<i class="fa fa-circle"></i>
    					</a>
    				</div>

    				<ul class="news-list recommendation-list">
    					<li v-for="(value,key) in list" v-if="key <= 5">
    						<a href="#" :title="value.title"><i>{{key+1}}</i>{{value.title}}</a>
    					</li>
    				</ul>
    			</div>
    			<div class="col-sm-8 all-news-list">
    				<div class="navigation-bar col-sm-12 hidden-xs">
    					<span>当前位置：</span>
    					<ol class="breadcrumb">
    						<li>学校首页&nbsp;&nbsp;&gt;</li><li>校园动态&nbsp;&nbsp;&gt;</li><li>校园新闻</li>
    					</ol>
    				</div>
    				<div class="news-con">
    					<div class="clearfix"></div>
    					<div class="sh-news">
    						<div class="news-item clearfix"  v-for="(value,key) in list" v-if="key <= crrentMax && key >=crrentMin">
    							<div class="news-date">
    								<div class="scale-xs" onclick="location.href='news_detail.html'">
    									<img src="../../static/images/qy_default.png">
    								</div>
    							</div>
    							<div class="news-intr">
    								<p><router-link :to="'/newsDetail/' + value.id" :title="value.title">{{value.title}}</router-link></p>
    								<div class="time"><span>2018-04-22 15:00</span></div>
    								<div class="content" v-html="value.id"></div>
    							</div>
    						</div>

    					</div>
    					<!-- 分页 -->
    					<div class="fr pages">
    							 <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[6, 10, 15, 20]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                      </el-pagination>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<!-- 手机端 -->
    	<div class="col-sm-6 visible-xs">
    		<div class="sh-news">
    			<div class=" col-sm-10">
    				<div class="module-title">
    					<i>校园动态</i>
    					<i class="line"></i>
    					<span class="sh-title">学校新闻</span>
    				</div>
    			</div>
    			<div class="news-item">
    				<div class="news-date">
    					<div class="scale-xs">
    						<img src="../../static/images/qy_default.png">
    					</div>
    				</div>
    				<div class="news-intr">
    					<p>青阳中学隆重召开八届二次教代会青阳中学隆重召开八届二次教代会青阳中学隆重召开八届二次教代会</p>
    					<div>2月24日上午8点，青阳中学八届二次教代会在报告厅举行，本次大会应出席的正式代表共有61人，实际与会59人，列席代表共10人。2月24日上午8点，青阳中学八届二次教代会在报告厅举行，本次大会应出席的正式代表共有61人，实际与会59人，列席代表共10人。</div>
    				</div>
    			</div>

    		</div>
    		<p class="noMore">没有更多了~</p>
    	</div>


    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'

export default {
  components: { myHeader, myFooter },
  data () {
    return {
      list: [],
      totalCount:1,
      currentPage:2,
      pageSize:6,
      crrentMin:'0',
      crrentMax:'5'
    }
  },
  created () {
    this.getData();
    document.title = '新闻页';
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data;
        this.totalCount = r.data.length;
      })
    },
     handleSizeChange(pageSize) {
      console.log(`每页 ${pageSize} 条`);
      this.pageSize = pageSize;
      this.crrentMin = (this.currentPage-1)*this.pageSize ;
      this.crrentMax = this.currentPage*(this.pageSize)-1;
      console.log("当前显示的信息为： ",this.crrentMin,this.crrentMax);
    },
    handleCurrentChange(page) {
      console.log(`当前页: ${page}`);
      this.currentPage = page;
      this.crrentMin = (page-1)*this.pageSize ;
      this.crrentMax = page*(this.pageSize)-1;
      console.log("当前显示的信息为： ",this.crrentMin,this.crrentMax);
    }
  }
}
</script>

<style>
	.sh-news .news-item{
		padding: 5px 0;
    	padding-bottom: 5px;
	}
	.news-item{
		border-bottom:1px dashed #e2e2e2;
	}

	.news-date{
		background-color: #fff;
		width: 23.5%;
		height: auto;
	}
	.news-date p{
		color: #fdaa57 !important;
	}
	.news-intr{
		width: 76.5%;
		background-color: #fff;
		height: auto;
		padding-right: 0;
	}
	/* 手机端 */
	@media screen and (max-width: 768px){
		.news-intr {
		    padding-top: 15px !important;
		}
		.news-intr p{
			font-size: 16px !important;
			color: #333 !important;
			letter-spacing: 0 !important;
			line-height: 18px !important;
		}
		.news-intr div{
			font-size: 13px !important;
			color: #999 !important;
			line-height: 17px !important;
			height:34px;
		}
	}
	/*pc端*/
	@media screen and (min-width: 768px){
		.news-intr p{
			font-size: 18px;
		}
	}
	.news-date p:first-child {
		font-size: 26px;
		font-weight: normal;
		margin: 0;
	}
	.news-date p:last-child {
		font-size: 12px;
		line-height: 26px;
		color: #fdaa57;
	}
	.news-intr p{
		line-height: 26px;
	}
	.news-intr div{
		line-height: 18px;
		color: #848484;
	}
	.news-intr div:last-child,.news-intr div:last-child span{
		font-size: 14px;
		line-height: 25px;
		color: #a6a6a6;
	}
	.news-item + .news-item{
		margin: 0;
	}
	.flex{
	    align-items: center;
	}
</style>
