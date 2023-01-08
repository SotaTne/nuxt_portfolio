<script lang="ts" setup></script>
<template>
  <footer>
    <div class="footer-container">
      <p class="text-center">© 2022 Motarou</p>
    </div>
  </footer>
</template>

<style lang="scss">
  @import 'assets/style/_variables.scss';
  footer {
    div {
      @include tab {
        padding-top: 6vh;
      }

      //background-color: red;
      p {
        vertical-align: middle;
        line-height: 12vh;
        color: black;
      }
      height: 12vh;
      width: 100%;
    }
  }
</style>
