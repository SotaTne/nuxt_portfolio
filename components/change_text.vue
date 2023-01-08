<script setup lang="ts">
  import { ref } from 'vue'
  const change_text_list = ['Motarou', 'Engineer'] //この中身を変える

  const hide_speed = 1950 //ms

  //以下は変更なし

  function create_str_map(in_list: string[]) {
    let out_list: Array<[string, boolean]> = []
    for (let i = 0; i < in_list.length; i++) {
      out_list.push([in_list[i], false])
    }
    out_list[0][1] = true
    return out_list
  }

  let out_put_list = ref(create_str_map(change_text_list))

  const show_and_hide_Text = () => {
    for (let i = 0; i < out_put_list.value.length; i++) {
      let next_index = i + 1
      if (next_index == out_put_list.value.length) {
        next_index = 0
      }
      if (out_put_list.value[i][1]) {
        setTimeout(() => {
          out_put_list.value[i][1] = !out_put_list.value[i][1]
        }, 100)

        setTimeout(() => {
          out_put_list.value[next_index][1] = !out_put_list.value[next_index][1]
        }, hide_speed)
      }
    }
  }

  //show_and_hide_Text();
  function change_text_fun() {
    setTimeout(() => {
      show_and_hide_Text()
      change_text_fun()
    }, 6000)
  }

  change_text_fun()
</script>
<template>
  <div class="change-text-area">
    <div v-for="i in out_put_list" :key="i[0]">
      <Transition>
        <p v-show="i[1]" class="change-text">{{ i[0] }}</p>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'assets/style/_variables.scss';

  .change-text-area {
    //change_textで変更しない場所
    //background-color: red;
    $text_size: $text_size_;
    @media (max-width: ($s_sp_max)) {
      $text_size: 50px;
    }
    height: $text_size * 1.5;
    width: $text_size * 5;

    @include sp {
      max-width: 100%;
    }
    /*
    @media (max-width: (370px)) {
      height: 40px * 1.5 !important;
      width: 50px * 5 !important;
    }
    */
    .change-text {
      vertical-align: middle;
      font-size: $text_size;
      /*
      @media (max-width: (370px)) {
        font-size: 50px;
      }
      */
      font-weight: bold;
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity $change_speed ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
