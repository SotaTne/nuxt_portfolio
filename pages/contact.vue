<script lang="ts"></script>
<template>
  <main>
    <div class="contact-main">
      <p class="my-message-area">
        私の、webポートフォリオはどうでしたか？ 質問や改善点、仕事の依頼、
        挨拶やコメントだけでも気軽によろしくお願いします。
      </p>
      <ContactForm />
    </div>
  </main>
</template>

<style lang="scss">
  @import 'assets/style/_variables.scss';

  .contact-main {
    .my-message-area {
      width: 500px;
      display: block;
      margin: 0 auto;
      @include sp {
        width: 80vw;
      }
    }
  }
</style>
