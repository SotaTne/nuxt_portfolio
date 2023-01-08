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
        <p>
          <span class="error-link move_border" @click="handleError">
            go to home
          </span>
          or
          <NuxtLink class="error-link move_border" to="/contact">
            contact me
          </NuxtLink>
        </p>
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="scss">
  .error-main {
    padding-top: 7vh;
    * {
      text-align: center;
    }

    h2,
    h1 {
      padding-bottom: 7vh;
    }
    .error-link {
      cursor: pointer;
      color: #2e2eff;
      font-size: 100%;
      font-weight: normal;
    }
  }
</style>
