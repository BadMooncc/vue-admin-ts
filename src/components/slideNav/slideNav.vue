<template>
  <div class="slide-nav">
    <el-menu
      :default-active="menuConf.defaultActive"
      :background-color="menuConf.backgroundColor"
      :text-color="menuConf.textColor"
      :active-text-color="menuConf.activeColor">
      <item :list="list"></item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { fetchTest } from '@/api/common'
import item from './item.vue'

interface listInterface {
    // 索引index是必须的
    [index:number]:string;
}
@Component({
  components: {
    item
  }
})
export default class HelloWorld extends Vue {
  // 导航栏列表
  private list:listInterface = [];
  // 导航栏样式配置
  private menuConf: Object = {
    defaultActive: '2',
    backgroundColor: '#545c64',
    textColor: '#fff',
    activeColor: '#ffd04b'
  }
  created():void {
    fetchTest().then((res:any) => {
      this.list = res.data;
    }).catch((err:any) => {
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slide-nav {
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #545c64;
}
</style>
