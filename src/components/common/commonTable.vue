<template>
  <div class="common-table">
    <el-table style="width: 100%">
      <el-table-column
        v-for="(item, index) in header"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || ''">
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
interface tableHeader {
  [index:number]:object;
}
interface list {
  [index:number]:object;
}
@Component({
  name: "commonTable"
})
export default class commonTable extends Vue {
  @Prop() private header!: tableHeader;
  @Prop({
    default: () => []
  }) private list?:list;
  created():void{
    console.log(this.header, '45')
  }
}
</script>