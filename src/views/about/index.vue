<template>
  <div>
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
  
  mounted() {
    
  }
}
</script>