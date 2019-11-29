<template>
  <div class="layout">
    <slide-nav></slide-nav>
    <div class="container">
      <el-container>
        <el-header class="layout-header">
          <el-breadcrumb separator="/" style="line-height:60px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import slideNav from './slideNav/slideNav.vue'

@Component({
  components: {
    slideNav
  }
})
export default class Layout extends Vue {
  
}
</script>

<style lang="scss" scoped>

  .container {
    padding-left: 200px;
    
  }
  .layout-header {
    background: #f9f9f9;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
  }


</style>