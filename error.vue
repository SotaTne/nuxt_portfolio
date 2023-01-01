<script lang="ts" setup>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    error: Object,
  })
  /*global clearError*/
  const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <NuxtLayout name="default">
    <main>
      <div class="error-main">
        <h1>error message:{{ error?.statusCode }}</h1>
        <h2 v-if="error?.statusCode === '404'">Page not found</h2>
        <h2 v-else>Please try again</h2>
        <button @click="handleError">go home</button>
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="scss">
  .error-main {
    * {
      text-align: center;
    }

    h2 {
      padding: 20px;
    }
  }
</style>
