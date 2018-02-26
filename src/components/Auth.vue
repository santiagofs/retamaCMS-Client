<template>
  <div id="site-wrapper" :class="{'sidebar-collapsed': sidebarCollapsed}">
    <header id="site-header" class="level">
      <div class="level-left">

      </div>
      <div class="level-right">
        <button class="button navbar-burger" @click="toggleSidebar()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <aside id="site-aside">
      <sidebar />
    </aside>

    <div id="site-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar.vue'


export default {
  name: 'Auth',
  components: {
    'sidebar': Sidebar
  },
  data () {
    return {
      sidebarCollapsed: false
    }
  },
  methods: {
    toggleSidebar () {
      this.sidebarCollapsed = !this.sidebarCollapsed
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_settings";

#site-wrapper {
  height: 100vh;
  overflow: hidden;
  padding-right: $sidebar-width;
  transition: padding-right 0.5s ease-in-out;

  #site-header {
    padding: $gap ;
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,.2);
    background: $light;

    #site-logo {
      height: 40px;
      display: inline-block;
      img {
        max-width: 100%; max-height: 100%;
      }
    }

    .navbar-burger {
      display: block;
    }
  }
  #site-aside {
    width: $sidebar-width;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background: url('../assets/texture.png');
    transition: right 0.5s ease-in-out;
  }

  #site-content {
    padding: $gap ;
    padding-top: 0;
  }

  &.sidebar-collapsed {
    padding-right: 0px;
    #site-aside {
        right: -$sidebar-width;
    }
  }
}
</style>
