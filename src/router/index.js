import Vue from 'vue'   //会自动到 'node_modules'中寻找
import Router from 'vue-router'
import Index from '@/page/index'  //@等价于 /src 这个目录
import News from '@/page/news'
import NewsDetail from '@/page/newsDetail'



Vue.use(Router)
/**
 * 路由信息配置
 */
export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/news/',//新闻列表页
      component:News
    },
    {
      path:'/newsDetail/:id',//新闻详情页
      component:NewsDetail
    }
  ]
});


