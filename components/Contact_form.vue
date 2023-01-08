<script lang="ts" setup></script>
<template>
  <div class="contact-box">
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/thanks"
    >
      <!--スパム対策-->
      <div class="send-info">
        <div class="input-box">
          <div class="email-box input-contents">
            <label for="email">e-mail（必須）</label>
            <input
              id="email"
              type="email"
              autocomplete="email"
              name="email"
              required
            />
          </div>
          <div class="name-box input-contents">
            <label for="name">name（必須）</label>
            <input
              id="name"
              type="text"
              name="name"
              autocomplete="name"
              required
            />
          </div>
        </div>
        <div class="message-box input-contents">
          <label for="message">メッセージ</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
      </div>
      <button type="submit" class="input-contents">送信</button>
      <input type="hidden" name="form-name" value="contact" />
      <!--これがないとダメ-->
    </form>
  </div>
  <!--
  <div class="contact-sns">
    <a href="https://github.com/motarou">
      <div class="github">
        <div class="github-icon"></div>
      </div>
    </a>

    <a href="https://twitter.com/Mota_rou">
      <div class="twitter">
        <div class="twitter-icon"></div>
      </div>
    </a>
  </div>
  -->
</template>
<style lang="scss">
  @import 'assets/style/_variables.scss';
  .contact-box {
    .send-info {
      padding-top: 5vh;
      padding-bottom: 10vh;
      display: flex;
      justify-content: space-evenly;
      .input-box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        input {
          width: 300px;
          padding: 10px 15px; /*ボックスを大きくする*/
          font-size: 16px;
          border-radius: 3px; /*ボックス角の丸み*/
          border: 2px solid #ddd; /*枠線*/
          box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
          outline: none;
          @include sp {
            width: 88vw;
          }
          &:focus {
            border: 2px solid #2ea1ff;
          }
        }
      }

      .message-box {
        textarea {
          display: block;
          font-size: 16px;
          border-radius: 3px; /*ボックス角の丸み*/
          border: 2px solid #ddd; /*枠線*/
          resize: none;
          padding: 10px 15px;
          width: 300px;
          height: 150px;
          @include sp {
            width: 80vw;
          }
          outline: none;
          &:focus {
            border: 2px solid #2ea1ff;
          }
        }
      }
      @include sp {
        flex-direction: column;
      }
      label {
        display: block;
        font-size: 16px;
      }
    }

    .input-contents {
      @include sp {
        margin: 1vh auto;
      }
    }

    button {
      display: block;
      margin: 0 auto;
      width: 10vw;
      height: 30px;
      border-radius: 3px; /*ボックス角の丸み*/
      border: 2px solid #ddd; /*枠線*/
      font-size: 16px;
      @include sp {
        height: 30px;
        width: 80vw;
      }
      &:hover {
        background-color: rgb(195, 195, 195);
      }
    }
    /*
    .contact-sns {
      display: flex;
      .github {
        .github-icon {
          background-image: url();
        }
      }
      .twitter {
        .twitter-icon {
          background-image: url();
        }
      }
    }
    */
  }
</style>
