<script lang="ts" setup>
  var works_list: ({
    name: string
    img: string
    link: string
  } | null)[] = []

  //下のworks_listを変える
  //写真,名前,リンク先を入れる(連想配列)
  works_list = []
</script>
<template>
  <div class="works-container">
    <h2
      v-if="
        works_list.length == 0 ||
        !works_list.some((element) => {
          return element != null
        })
      "
    >
      no works
    </h2>
    <div v-else class="works-area">
      <div
        v-for="work_content in works_list"
        :key="work_content == null ? '' : work_content + ''"
        class="works-box"
      >
        <a v-if="work_content != null" :href="work_content?.link">
          <img :src="work_content?.img" :alt="work_content?.name + `の写真`" />
          <p>{{ work_content?.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .works-container {
    h2 {
      margin: 50px;
      text-align: center;
    }

    .works-box {
      display: flex;
    }
  }
</style>
