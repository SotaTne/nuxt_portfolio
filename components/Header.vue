<script lang="ts" setup>
  import { ref } from 'vue'
  let burger_bool_open = false
  let burger_class = ref('nav-menu open')
  const change_bool = () => {
    burger_bool_open = !burger_bool_open
    burger_class.value = burger_bool_open ? 'nav-menu close' : 'nav-menu open'
  }
  const close_burger = () => {
    burger_bool_open = false
    burger_class.value = burger_bool_open ? 'nav-menu close' : 'nav-menu open'
  }
</script>
<template>
  <header>
    <div class="header-container">
      <NuxtLink to="/" class="list-img">
        <img src="@/assets/img/nav_logo.svg" alt="Motarou's Logo" />
      </NuxtLink>
      <nav>
        <ul>
          <li class="no-dots-li">
            <NuxtLink class="move_border" to="/works">Works</NuxtLink>
          </li>
          <li class="no-dots-li">
            <NuxtLink class="move_border" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
      <div :class="burger_class" @click="change_bool"></div>
    </div>
    <div v-show="burger_bool_open" class="burger-contents">
      <nav>
        <ul>
          <li class="no-dots-li">
            <NuxtLink to="/works" class="burger_text" @click="close_burger">
              Works
            </NuxtLink>
          </li>
          <li class="no-dots-li">
            <NuxtLink to="/contact" class="burger_text" @click="close_burger">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss">
  @import 'assets/style/_variables.scss';
  header {
    .header-container {
      width: 100%;
      // background-color: red;
      height: 12vh; //$head_height;;
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      .list-img {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        img {
          margin-left: 70px;
          height: 45px;
          width: 45px;
          line-height: 12vh;
          border-radius: 50%;
          object-fit: cover;
          @include sp {
            margin-left: 0px;
            margin-right: 60%;
          }
        }
      }

      nav {
        @include sp {
          display: none;
        }
        width: 100%;
        justify-content: center;
        display: flex;
        ul {
          display: flex;
          li {
            padding: 0 20px;
            line-height: 12vh;
          }
        }
      }
      .nav-menu {
        align-items: center;
        line-height: 12vh;
        height: 44px;
        width: 44px;
        background-size: 40px;
        display: none;
        @include sp {
          display: inline;
        }
        background-position: center;
        cursor: pointer;
      }
      .open {
        background-image: url('@/assets/img/burger_menu.svg');
      }
      .close {
        background-image: url('@/assets/img/close.svg');
      }
    }
    .burger-contents {
      position: fixed;
      z-index: 15;
      top: 12vh;
      width: 100vw;
      height: 88vh;
      background: white;
      li {
        text-align: center;
        padding: 5px 0;
        .burger_text {
          font-size: 30px;
        }
      }
    }
  }
</style>
