<template>
  <v-btn color="primary" @click="logout">
    Logout
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    async logout () {
      await fetch('/api/v1/auth/logout');
      window.location.href = '/'; // TODO: proper cache cleaning
    },
  },
  middleware: ['auth'],
});
</script>
