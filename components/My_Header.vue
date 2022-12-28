<template>
  <header>
    <nav class="header-list">
      <NuxtLink to='/' class="list-img">
        <img src="https://hyogo-photostudio.info/wp-content/uploads/hyogo-photostudio%E3%80%80sannda-best3.jpg"
          alt="iconが来る予定">
      </NuxtLink>
      <ul>
        <li class="no-dots-li">
          <NuxtLink to="/works">Works</NuxtLink>
        </li>
        <li class="no-dots-li">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

</template>
<script lang="ts" setup>

</script>
<style lang="scss">
header {
  //position: fixed;
  //z-index: 10;
  //top: 0;
  //left: 0;
  width: 100%;

  height: 60px;
  //border: solid;
  //background-color: rgba(rgb(108, 9, 9), 0.7);
  display: flex;

  .header-list {
    width: 100%;
    justify-content: center;
    display: flex;

    .list-img {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    ul {
      display: flex;

      li {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>