<template>
  <div>
    <span v-for="item in list" :key="item.id">
       <router-link v-if="item.children" tag="span" :to="item.link">
        <el-submenu :index="item.id">
          <template slot="title">
            <i :class="'el-icon-'+item.icon"></i>
          {{item.label}}
          </template>
          <item :list="item.children"></item>
        </el-submenu>
      </router-link>
      <router-link v-else slot="title" tag="span" :to="item.link">
        <el-menu-item  :index="item.id">
          <i :class="'el-icon-'+item.icon"></i>
          <!-- <span slot="title">{{item.label}}</span> -->
          {{item.label}}
        </el-menu-item>
      </router-link>
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