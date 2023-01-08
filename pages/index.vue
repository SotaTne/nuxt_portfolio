<script lang="ts" setup></script>
<template>
  <main>
    <div class="index-main">
      <img
        src="@/assets/img/my_logo.svg"
        alt="Motarou's Logo"
        width="400px"
        height="287px"
      />
      <div class="text_area">
        <div class="h-div">
          <ChangeText class="change_text" />
        </div>
        <p>
          私は、主にwebアプリ・webサイト・スマホアプリなどを作成している、エンジニアです。
          <br />
          webスプレイシングや、データ分析などもできます。
        </p>
        <p>
          お気軽に
          <a href="https://twitter.com/Mota_rou" class="move_border">twitter</a>
          のフォローをお願いします!
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
  @import 'assets/style/_variables.scss';
  main {
    //max-width: 100vw;
    .index-main {
      height: 40vh;
      width: 60%;
      margin: 0 auto;
      padding-top: 50px;
      @include tab {
        //height: 1000px;
        width: 100%;
        padding: 50px 100px;
        margin: 0;
        flex-direction: column;
        padding: 0;
      }
      @include sp {
        width: 100%;
        padding: 50px 100px;
        padding-bottom: 0;
        padding: 0;
        margin: 0;
      }
      align-items: center;
      .text_area {
        padding: 0 100px;
        a {
          color: #2e2eff;
        }
        p {
          padding-bottom: 30px;
          max-width: $text_size_ * 5;
          @include sp {
            max-width: 100%;
          }
        }
        @include sp {
          padding: 0;
        }
        @include tab {
          padding: 10px;
        }

        .h-div {
          padding-bottom: 10vh;
          @include tab {
            padding-top: 4vh;
            padding-bottom: 4vh;
          }
          display: flex;
        }
        display: flex;
        flex-direction: column;
      }
      img {
        //heightはhtmlで指定
        display: flex;
        object-fit: cover;

        @include sp {
          display: none;
        }
      }
      display: flex;
    }
  }
</style>
