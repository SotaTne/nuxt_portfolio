<template>
  <!--スパム対策-->
  <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true"></form>
  <!--ここからinput-->
  <div class="send-box">
    <div class="input-box">
      <div class="email-box input-contents">
        <label for="email">e-mail（必須）</label>
        <input type="email" pattern=".+@globex\.com" size="30" required name="email">
      </div>
      <div class="name-box input-contents">
        <label for="name">name（必須）</label>
        <input type="text" size="30" required name="name">
      </div>
    </div>
    <div class="message-box">
      <p>message</p>
      <textarea name="message" cols="30" rows="10" required></textarea>
    </div>
    <button type="submit">送信</button>
  </div>
</template>
<style lang="scss">
.send-box {
  display: flex;

  .input-box {
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid #333
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
}
</style>
<script lang="ts" setup>

</script>