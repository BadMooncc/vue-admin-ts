<template>
  <div>
    <el-row>
      <el-col :span="12">
        <echart :config="config" />
      </el-col>
      <el-col :span="12">
        <echart :config="config2" />
      </el-col>
    </el-row>
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
    width: "100%",
    height: "300px",
    options: {
            color: ['#3398DB'],
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                barWidth: '30%',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
  };
  public config2 = {
    width: '100%',
    height: '300px',
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