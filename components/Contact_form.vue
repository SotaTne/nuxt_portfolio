<template>
  <!--スパム対策-->
  <!--
  <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
    <div class="send-box">
      <div class="input-box">
        <div class="email-box input-contents">
          <label for="email">e-mail（必須）</label>
          <input type="email" size="30" autocomplete="email" name="email" required>
        </div>
        <div class="name-box input-contents">
          <label for="name">name（必須）</label>
          <input type="text" size="30" name="name" autocomplete="name" required>
        </div>
      </div>
      <div class="message-box">
        <p>message</p>
        <textarea name="message" cols="30" rows="10" required></textarea>
      </div>
      <button type="submit">送信</button>
    </div>
  </form>
  -->

  <!-- ここに追加 -->
  <form name="contact" method="POST" netlify>
    <p>
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
    <input type="hidden" name="form-name" value="contact" />
  </form>


  <!-- 省略します -->
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

input {
  border: 1px solid #333
}

textarea {
  border: 1px solid #333;
  resize: none;
  width: 300px;
  height: 200px;
}
</style>
<script lang="ts" setup>

</script>