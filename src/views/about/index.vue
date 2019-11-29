<template>
  <div>
    <echart :config="config" />
    <echart :config="config2" />
      <!-- <div :style="{width:'200px',height:'200px'}" ref="echarts"></div> -->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import echart from "@/components/common/chart.vue";
@Component({
  components: {
    echart
  }
})
export default class About extends Vue {
  public config = {
    width: "200px",
    height: "200px",
    options: {
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
  };
  public config2 = {
    width: "400px",
    height: "400px",
    options: {
            title: { text: 'sad' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 2, 3, 10, 10, 2]
            }]
        }
  };
  mounted() {
    
  }
}
</script>