<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      {{ error.statusCode }} - {{ error.message }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head () {
    return {
      title: this.error.message,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
