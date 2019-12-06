<template>
  <div class="common-table">
    <el-table style="width: 100%" :data="list">
      <el-table-column
        v-for="(item, index) in header"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || ''"
      >
      <!-- {{item}} -->
        <template slot-scope="scope">
          <ex-slot v-if="item.render" :render="item.render" :row="scope.row" :index="scope.$index" :column="item" />
          <span v-else>{{ scope.row[item.prop] || '-' }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h: any, ctx: any) => {
    const params: any = {
      row: ctx.props.row,
      index: ctx.props.index
    };
    if (ctx.props.column) params.column = ctx.props.column;
    return ctx.props.render(h, params);
  }
};
import { Component, Prop, Vue } from "vue-property-decorator";
interface tableHeader {
  [index: number]: object;
}
interface list {
  [index: number]: object;
}
@Component({
  name: "commonTable",
  components: {
    exSlot
  }
})
export default class commonTable extends Vue {
  @Prop() private header!: tableHeader;
  @Prop({
    default: () => []
  }) private list?: list;
  created(): void {
    console.log(this.header, "45");
  }
}
</script>