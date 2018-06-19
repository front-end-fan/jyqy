<template>
  <div id="app">
    <keep-alive exclude="newsDetail">   <!-- 被包含的组件保留状态，或避免重新渲染 -->
        <!-- 该组件将被缓存！ -->
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  @import "./style/font-awesome.min.css";
  @import "./style/bootstrap.min.css";
  @import "./style/reset.css";
  @import "./style/base";
</style>
