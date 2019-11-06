<template>
  <div>
    <span v-for="item in list" :key="item.id">
      <el-submenu v-if="item.children" :index="item.id">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <router-link tag="span" :to="item.link">{{item.label}}</router-link>
        </template>
        <item :list="item.children"></item>
      </el-submenu>
      <el-menu-item v-else :index="item.id">
        <i :class="'el-icon-'+item.icon"></i>
        <!-- <span slot="title">{{item.label}}</span> -->
        <router-link slot="title" tag="span" :to="item.link">{{item.label}}</router-link>
      </el-menu-item>
    </span>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
interface list {
  [index:number]:object;
}
@Component({
  name: "item"
})
export default class Item extends Vue {
  @Prop() private list!: number;

  created():void{
    console.log(this.list)
  }
}
</script>