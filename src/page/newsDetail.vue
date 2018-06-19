<template>
  <div>
    <myHeader1></myHeader1>

    <div class="container all-info-con">
    		<!-- pc端 -->
    		<div class="row">
    			<div class="col-sm-2 secondary-menu hidden-xs">
    				<div class="secondary-title">
    					校园动态
    					<a class="menus-toggle visible-xs">
    						<i class="fa fa-circle"></i>
    						<i class="fa fa-circle"></i>
    						<i class="fa fa-circle"></i>
    					</a>
    				</div>

    				<ul class="menus-toggle-list">
    					<li><a class="active">校园新闻<i class="fa fa-angle-right"></i></a></li>
    					<li><a>通知公告<i class="fa fa-angle-right"></i></a></li>
    					<li><a>校务公开<i class="fa fa-angle-right"></i></a></li>
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
    					<ol class="breadcrumb" :title="'学校首页 - 校园动态 - 校园新闻 - '+dat.title">
    						<li>学校首页&nbsp;&nbsp;&gt;</li><li>校园动态&nbsp;&nbsp;&gt;</li><li>校园新闻&nbsp;&nbsp;&gt;</li><li>{{dat.title}}</li>
    					</ol>
    				</div>
    				<div class="news-con">
    					<div class="clearfix"></div>
    					<div class="news-detail">
    						<div class="news-title">
    							<p>{{dat.title}}</p>
    							<ul class="list-inline news-info">
    								<li class="hidden-xs">发布时间：<span>{{$utils.goodTime(dat.create_at)}}</span></li>
    								<li class="visible-xs publish-date">{{$utils.goodTime(dat.create_at)}}</li>
    								<li class="hidden-xs">文章来源：<span>本站原创</span></li>
    								<li class="hidden-xs">作者：<span>{{dat.author_id}}</span></li>
    								<li class="visist-times">浏览次数：<span>{{dat.visit_count}}</span></li>
    							</ul>
    						</div>
    						<div class="news-content" v-html="dat.content">
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>


    <myFooter1></myFooter1>
  </div>
</template>

<script>
import myHeader1 from '../components/header.vue'
import myFooter1 from '../components/footer.vue'

export default {
  components: { myHeader1, myFooter1 },
  data () {
    return {
      id: this.$route.params.id,
      dat: {},
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
    this.getContent();
    document.title = '新闻详情页';
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data;
        this.totalCount = r.data.length;
      })
    },
     getContent (){
        this.$api.get('topic/'+this.id,null,r =>{
          this.dat = r.data;
        })
     }
  }
}
</script>

<style>
	.sh-news .news-item{
  		padding: 5px 0;
  	}
  	.news-item{
  		border-bottom:1px dashed #e2e2e2;
  	}

  	.news-date{
  		background-color: #fff;
  		width: 20%;
  		height: auto;
  	}
  	.news-date p{
  		color: #fdaa57 !important;
  	}
  	.news-intr{
  		width: 80%;
  		background-color: #fff;
  		height: auto;
  		padding-right: 0;
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
  		line-height: 18px;
  		color: #a6a6a6;
  	}
  	.news-item + .news-item{
  		margin: 0;
  	}
  	.flex{
  	    align-items: center;
  	}
  	.news-content .markdown-text {
         text-indent: 0;
     }
  	.news-content .markdown-text img{
         width:100px;
         display:block;
         margin:10px auto;
     }
  	.news-content .markdown-text h2,h3 {
         text-align: center;
         background: #f3f3f3;
         padding: 10px;
     }
</style>
