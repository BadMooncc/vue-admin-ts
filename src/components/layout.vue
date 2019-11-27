<template>
  <div class="laoput">
    <slide-nav></slide-nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import slideNav from './slideNav/slideNav.vue'

@Component({
  components: {
    slideNav
  }
})
export default class Layout extends Vue {
  
}
</script>

<style lang="scss" scoped>
.container {
  padding-left: 200px;
}
</style>