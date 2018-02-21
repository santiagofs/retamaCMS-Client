<template>
    <div id="aside-container">
        <ul id="aside-menu">
            <li class="nav-header is-clearfix">

                <a href="/profile" class="avatar-holder">
                    <img alt="image" class="img-circle" src="https://www.gravatar.com/avatar/a864cef51b128ecae73991e42581476c" />
                </a>

                <div class="dropdown is-hoverable usermenu">
                    <div class="dropdown-trigger">
                        <button class="">
                            <span>The Username</span>
                            <span class="icon is-small">
                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>

                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item"> Item 1 </a>
                            <a class="dropdown-item"> Item 2 </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">Sign Out</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="menu-item">
                <a href="/"> <span class="icon"><i class="fa fa-th-large"></i></span> <span class="">Dashboard</span></a>
            </li>
            <router-link tag="li" to="/catalog" class="menu-item" :class="{expanded: catalogExpanded}">
                <a  @click="catalogExpanded = !catalogExpanded"> <span class="icon"><i class="fa fa-flask"></i></span> <span class="">Test Catalog</span> </a>
                <ul class="submenu">
                    <router-link tag="li" to="/catalog/tests">
                        <a href="/"><span class="">Tests</span></a>
                    </router-link>
                    <li>
                        <a href="/"><span class="">Tests Categories</span></a>
                    </li>
                    <li>
                        <a href="/"><span class="">Disorders</span></a>
                    </li>
                </ul>
            </router-link>
            <li class="menu-item">
            </li>

        </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      catalogExpanded: false
    }
  },
  methods: {
    expand (what) {
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_settings";

$hl-color: #FFF;
$normal-color: #8095a8;
a {
  color: #DFE4ED;
}
#aside-container {
    height: 100vh;
}
#aside-menu {

  padding: $gap*2 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .menu-item {
      background-color: #2f4050;
      border-left: 4px solid transparent;
      min-height: 51px;
      a {
        position: relative;
        display: block;
        padding: $gap;
        color: #a7b1c2;
        font-weight: 600;
    }
    .submenu {
        padding-left: $gap;
        li {
            border-left: 4px solid transparent;
            a {
                padding: $gap/4;
                padding-left: $gap;
            }
            &:hover {
                a {
                    color: $white;
                }
            }
            &.active, &.router-link-active {
                 border-color: $turquoise;
            }
        }
    }
    &:last-child {
        flex-grow: 1;
    }
    &:not(:last-child) {
        &:hover, &.expanded {
            background-color: transparent;
            > a {
                color: $white;
            }
        }
    }
    &:not(.expanded) {
        .submenu {
            height: 0;
            overflow: hidden;
        }
    }
    &.expanded {
        border-left: 4px solid $turquoise;
        padding-bottom: $gap;
        a {
            padding-bottom: $gap/2;
        }
    }

    li.active, li.router-link-active {
        > a {
            color: $white;
            font-weight: bold;
        }
    }
  }
}

.nav-header {
    padding: 0 $gap;
    background-color: transparent;
    .avatar-holder {
        display: block;
        height: 80px;
        width: 80px;
        overflow: hidden;
        border-radius: 100%;
        padding: 0px;
        margin-bottom: $gap;
        float: right;
    }
    .usermenu {
        font-size: 1.4rem;
        button {
            border: none;
            border-radius: 4px;
            background: transparent;
            color: $hl-color;
        }
        .dropdown-content {
            min-width: 260px;
            background-color: rgba(255,255,255, .9);
            box-shadow: $box-shadow;
            margin-left: -4px;
        }
        .dropdown-item {
            font-size: 1.4rem;
            border-left: 4px solid transparent;
            &:hover {
                border-color: $primary;
                background: none;
                color: $black;
            }
        }
    }
}

</style>

