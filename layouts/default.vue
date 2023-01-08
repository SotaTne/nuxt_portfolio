<script lang="ts" setup></script>
<template>
  <div class="container">
    <!--header-->

    <Header />

    <slot />

    <Footer />
    <!--footer-->
  </div>
</template>
<script></script>
<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    height: auto !important;
    height: 100%;
    min-height: 100%;
  }
</style>
