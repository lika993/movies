<template>
  <div id="app" class="wrapper wrapper_black">
    <headerComponent></headerComponent>
    
    <div class="content">
       <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import headerComponent from './components/Header.vue'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    headerComponent
  }
}
</script>

<style lang="scss">
  @import './assets/scss/styles.scss';
</style>
