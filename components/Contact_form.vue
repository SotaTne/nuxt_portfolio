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
      <div class="input-box">
        <div class="email-box input-contents">
          <label for="email">e-mail（必須）</label>
          <input
            id="email"
            type="email"
            size="30"
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
            size="30"
            name="name"
            autocomplete="name"
            required
          />
        </div>
      </div>
      <div class="message-box">
        <label for="message"></label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          required
        ></textarea>
      </div>
      <button type="submit">送信</button>
      <input type="hidden" name="form-name" value="contact" />
      <!--これがないとダメ-->
    </form>
  </div>
</template>
<style lang="scss">
  .contact-box {
    display: flex;

    .input-box {
      display: flex;
      flex-direction: column;

      input {
        border: 1px solid #333;
      }
    }

    .message-box {
      textarea {
        border: 1px solid #333;
        resize: none;
        width: 300px;
        height: 200px;
      }
    }

    button {
    }
  }
</style>
