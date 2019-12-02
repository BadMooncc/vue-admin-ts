<template>
  <div class="echart">
    <div :style="{width:config.width,height:config.height}" ref="echarts"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Echarts from 'echarts'
interface config{
  options: any,
  width: string,
  height: string
}
@Component
export default class chart extends Vue {
   @Prop() public config!: config;
   private myChart:any = {}
   public drawLine(){
        // 基于准备好的dom，初始化echarts实例
        this.myChart = Echarts.init(this.$refs.echarts)
        // 绘制图表
        this.myChart.setOption(this.config.options);
    }
    public afreshDraw(data:any) {
      this.config.options.series.data = data
      this.myChart.setOption(this.config.options);
    }
   mounted() {
      this.drawLine()
   }
}
</script>