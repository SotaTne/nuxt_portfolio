<template>
  <div>
    <ul>
      <li v-for="item in [0, 2, 3]" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">

</style>