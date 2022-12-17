<template>
  <div>

    <nav>
      <a href="/"><img
          src="https://hyogo-photostudio.info/wp-content/uploads/hyogo-photostudio%E3%80%80sannda-best3.jpg"
          alt="iconが来る予定"></a>
      <ul>
        <li class="no_list_li"><a href="/about">About</a></li>
        <li class="no_list_li"><a href="/works">Works</a></li>
        <li class="no_list_li"><a href="/contact">contact</a></li>
      </ul>
    </nav>
    <!--header-->
    <slot />


    <!--footer-->
  </div>
</template>
<script>
</script>
<style lang="scss">
nav {
  background-color: orange;
  display: flex;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  ul {
    display: flex;
  }
}
</style>