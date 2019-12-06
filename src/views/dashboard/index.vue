<template>
  <div class="dashboard">
    <el-row class="section phase">
      <el-col
        @click.native="handleClick('1', phaseAll.week)"
        class="section-item"
        :class="phaseActive === 'week' ? 'section-item_active':''"
        :span="8"
      >
        <p class="section-title">周数据</p>
        <p class="section-main">10</p>
      </el-col>
      <el-col
        @click.native="handleClick('month', phaseAll.month)"
        :span="8"
        class="section-item"
        :class="phaseActive === 'month' ? 'section-item_active':''"
      >
        <p class="section-title">月数据</p>
        <p class="section-main">10</p>
      </el-col>
      <el-col
        @click.native="handleClick('quarter', phaseAll.quarter)"
        :span="8"
        class="section-item"
        :class="phaseActive === 'quarter' ? 'section-item_active':''"
      >
        <p class="section-title">季度数据</p>
        <p class="section-main">10</p>
      </el-col>
      <el-col :span="24">
        <echart ref="phase" :config="config3" />
      </el-col>
    </el-row>
    <el-row class="section">
      <el-col :span="12">
        <echart :config="config" />
      </el-col>
      <el-col :span="12">
        <echart :config="config2" />
      </el-col>
    </el-row>
    <el-row class="section">
      <el-col :span="12">
        <common-table :header="tableHeader" :list="[{title:'12',content:'34',img:''}]"></common-table>
      </el-col>
      <el-col :span="12">

      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import echart from "@/components/common/chart.vue";
import commonTable from "@/components/common/commonTable.vue";
@Component({
  components: {
    echart,
    commonTable
  }
})
export default class About extends Vue {
  // 需要先定义ref才能使用
  $refs!: {
    phase: echart;
  };
  protected tableHeader = [
    {prop: 'title', label: '标题'},
    {prop: 'content', label: '内容'},
    {
      prop: 'img',
      label: '图片',
      render(h:any, params:any){
        console.log(params, 'this')
        return h('span',params)
        // 报错？
        // return (
        //   <div>{params}</div>
        // )
      }
  }]
  private phaseActive = "week";
  private phaseAll = {
    week: [300, 400, 100],
    month: [600, 800, 300],
    quarter: [1000, 1800, 3000]
  };
  private phaseData = this.phaseAll.week;
  public config = {
    width: "100%",
    height: "300px",
    options: {
      title: { text: "人群占比" },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: "面积模式",
          type: "pie",
          radius: [30, 110],
          roseType: "area",
          data: [
            { value: 10, name: "rose1" },
            { value: 5, name: "rose2" },
            { value: 15, name: "rose3" },
            { value: 25, name: "rose4" },
            { value: 20, name: "rose5" },
            { value: 35, name: "rose6" },
            { value: 30, name: "rose7" },
            { value: 40, name: "rose8" }
          ]
        }
      ]
    }
  };
  // 当日实时数据
  public config2 = {
    width: "100%",
    height: "300px",
    options: {
      tooltip: {
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['当日实时访问量', '当日实时成交量']
      },
      title: { text: "当日实时数据" },
      xAxis: {
        type: "category",
        data: ["0-4点", "4-8点", "8-12点", "12-16点", "16-20点", "20点以后"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
            name:'当日实时访问量',
            type:'line',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
          name: '当日实时成交量',
          barWidth: '30px',
          data: [82, 93, 91, 94, 190, 130, 320],
          type: "bar",
          smooth: true
        },
      ]
    }
  };
  // 总数据图表
  public config3 = {
    width: "100%",
    height: "300px",
    options: {
      tooltip: {},
      textStyle: "#ccc",
      xAxis: {
        nameTextStyle: {
          color: "#ccc"
        },
        type: "category",
        data: ["Mon", "Tue", "Wed"]
      },
      yAxis: {
        type: "value",
        nameTextStyle: {
          color: "#ccc"
        }
      },
      series: [
        {
          data: this.phaseData,
          type: "line",
          smooth: true
        }
      ]
    }
  };
  private handleClick(val: string, data: any) {
    this.phaseActive = val;
    // this.phaseData = data
    // this.phaseEl.drawLine()
    console.log(this.phaseData);
    console.log(this.$refs.phase.afreshDraw(data), "this.$refs.phase");
  }
  created():void {
    console.log(123)
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  .section-item:nth-child(2) {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .section {
    background: #fff;
    margin: 0 0 20px 0;
    padding: 20px;
    .section-item {
      padding: 20px 0;
      p {
        text-align: center;
      }
      .section-title {
        color: #409eff;
        font-size: 26px;
        line-height: 48px;
      }
      .section-main {
        transition: all 0.2s;
        font-size: 18px;
        color: #606266;
      }
    }
  }

  .section-item_active {
    .section-main {
      color: #add7ff;
    }
  }
  .section-item:hover {
    cursor: pointer;
    .section-main {
      color: #add7ff;
    }
  }
}
</style>