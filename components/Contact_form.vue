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
</template>
<style lang="scss">
  @import 'assets/style/_variables.scss';
  .contact-box {
    .send-info {
      display: flex;
      justify-content: space-evenly;
      .input-box {
        //height: 50px;
        //size: 50;
        display: flex;
        flex-direction: column;

        label {
          display: block;
        }
        input {
          width: 300px;
          @include sp {
            text-align: center;
            width: 80vw;
          }
          display: block;
          border: 1px solid #333;
        }
      }

      .message-box {
        label {
          display: block;
        }
        textarea {
          display: block;
          border: 1px solid #333;
          resize: none;
          width: 300px;
          height: 200px;
          @include sp {
            width: 80vw;
          }
        }
      }
      @include sp {
        flex-direction: column;
      }
    }

    .input-contents {
      @include sp {
        margin: 1vh auto;
      }
    }

    button {
      display: block;
      width: 10vw;
      height: 30px;
      @include sp {
        height: 30px;
        width: 80vw;
      }
    }
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
  }
</style>
