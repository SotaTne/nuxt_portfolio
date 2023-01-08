<script lang="ts" setup></script>
<template>
  <main>
    <div class="thanks-main">
      <h1>メールを受け取りました。</h1>
      <NuxtLink to="/" class="go-home">home</NuxtLink>
    </div>
  </main>
</template>
<style lang="scss">
  @import 'assets/style/_variables.scss';

  .thanks-main {
    @include sp {
      padding-top: 10vh;
    }
    h1 {
      text-align: center;
      padding: 50px 0;
      @include sp {
        font-size: 25px;
      }
      @include ssp {
        font-size: 20px;
      }
    }
    .go-home {
      padding-top: 5vh;
      font-size: 20px;
      display: block;
      padding: 0 auto;
      text-align: center;
    }
  }
</style>
