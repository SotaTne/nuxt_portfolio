<template>

  <NuxtLayout name="default">
    <h1>error message:{{ error?.statusCode }}</h1>
    <h2 v-if="error?.statusCode === '404'">Page not found</h2>
    <h2 v-else>Please try again</h2>
    <button @click="handleError">go home</button>
  </NuxtLayout>

</template>
<script lang="ts" setup>
const props = defineProps({
  error: Object
})
//console.log(props);
const handleError = () => clearError({ redirect: '/' })
</script>
