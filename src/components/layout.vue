<template>
  <div class="layput">
    <slide-nav></slide-nav>
    <div class="container">
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/">about222</router-link>
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
  padding-left: 300px;
}
</style>