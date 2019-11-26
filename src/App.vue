<template>
  <div id="app">
    
    <div>
      <router-link :to="{ path: '/' }">home1</router-link>
      <router-link :to="{ path: '/about' }">about2</router-link>
    </div>
    <div>
      <router-view :key="$route.fullPath"/>
    </div>
    
  </div>
</template>


