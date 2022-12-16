<template>
  <div class="container">
    <h1 v-if="error.statusCode === '404'">Page not found</h1>
    <h1 v-else-if="error.statusCode === '505'">server error</h1>
    <h1 v-else>error</h1>
    <h2>now error {{ error.statusCode }}</h2>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
