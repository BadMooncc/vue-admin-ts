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
  // 需要先定义ref才能使用
  $refs!: {
    phase: echart;
  };
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
  public config2 = {
    width: "100%",
    height: "300px",
    options: {
      tooltip: {},
      title: { text: "当日实时访问量" },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true
        }
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
  mounted() {}
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