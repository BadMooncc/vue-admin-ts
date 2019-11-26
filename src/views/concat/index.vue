<template>
  <div>
    concat
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/">about222</router-link>
  </div>
</template>
<script>
import { Vue } from "vue-property-decorator";
export default class Concat extends Vue {
  
}
</script>