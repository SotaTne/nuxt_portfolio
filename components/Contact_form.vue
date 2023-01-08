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
        <div class="message-box">
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
      <button type="submit">送信</button>
      <input type="hidden" name="form-name" value="contact" />
      <!--これがないとダメ-->
    </form>
  </div>
</template>
<style lang="scss">
  @import 'assets/style/_variables.scss';
  .contact-box {
    .send-info {
      display: flex;
      .input-box {
        size: 30;
        display: flex;
        flex-direction: column;

        label {
          display: block;
        }
        input {
          @include sp {
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

    button {
    }
  }
</style>
