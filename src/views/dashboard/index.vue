<template>
  <div class="dashboard">
    <el-row class="section phase">
      <el-col 
        @click.native="handleClick('1', phaseAll.week)"
        class="section-item"
        :class="phaseActive === 'week' ? 'section-item_active':''" 
        :span="8">
        <p class="section-title">周数据</p> 
        <p class="section-main">10</p>
      </el-col>
      <el-col 
        @click.native="handleClick('month', phaseAll.month)"
        :span="8"
        class="section-item"
        :class="phaseActive === 'month' ? 'section-item_active':''">
        <p class="section-title">月数据</p> 
        <p class="section-main">10</p>
      </el-col>
      <el-col 
        @click.native="handleClick('quarter', phaseAll.quarter)"
        :span="8"
        class="section-item"
        :class="phaseActive === 'quarter' ? 'section-item_active':''">
         <p class="section-title">季度数据</p> 
        <p class="section-main">10</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <echart ref="phase" :config="config3" />
      </el-col>
    </el-row>
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
  // public _this = this;
  $refs!:{
    phase: echart
  }
  private phaseActive = 'week';
  private phaseAll = {
    week: [300,400,100],
    month: [600,800,300],
    quarter: [1000,1800,3000]
  }
  private phaseData = this.phaseAll.week;
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
  // 总数据图表
  public config3 = {
    width: '100%',
    height: '300px',
    options: {
        tooltip: {},
        textStyle: '#ccc',
        xAxis: {
            nameTextStyle: {
              color: '#ccc'
            },
            type: 'category',
            data: ['Mon', 'Tue', 'Wed']
        },
        yAxis: {
            type: 'value',
            nameTextStyle: {
              color: '#ccc'
            }
        },
        series: [{
            data: this.phaseData,
            type: 'line',
            smooth: true
        }]
    }
  };
  private handleClick(val:string, data:any) {
    this.phaseActive = val
    // this.phaseData = data
    // this.phaseEl.drawLine()
    console.log(this.phaseData)
    console.log(this.$refs.phase.afreshDraw(data), 'this.$refs.phase')
  }
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  .section-item:nth-child(2) {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .section-item {
    padding: 20px 0;
    margin-bottom: 20px;
    p{
      text-align: center;
    }
    .section-title {
      color: #409EFF;
      font-size: 26px;
      line-height: 48px;
    }
    .section-main {
      transition: all .2s;
      font-size: 18px;
      color: #606266;
    }
  }
  .section-item_active {
    .section-main {
      color:#add7ff;
    }
  }
  .section-item:hover{
    cursor: pointer;
    .section-main {
      color: #add7ff;
    }
  }
}
</style>