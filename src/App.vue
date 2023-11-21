<script >
// import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'


export default {
  components: {
    SideBar,
  },
};
</script>

<template>
  <div class="app-containner">
    <SideBar />
    <main class="main-container">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/cmps/app-containner";
</style>
