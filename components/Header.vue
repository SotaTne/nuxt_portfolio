<script lang="ts" setup></script>
<template>
  <div class="header-container">
    <header>
      <nav>
        <ul>
          <li class="no-dots-li">
            <NuxtLink to="/">home</NuxtLink>
          </li>
          <li class="no-dots-li">
            <NuxtLink to="/works">Works</NuxtLink>
          </li>
          <li class="no-dots-li">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<style lang="scss">
  .header-container {
    header {
      z-index: 10;
      position: fixed;

      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      display: flex;

      nav {
        width: 100%;
        justify-content: center;
        display: flex;

        ul {
          display: flex;

          li {
            margin: 20px;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
</style>
