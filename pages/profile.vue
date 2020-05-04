<template>
  <v-layout
    column
  >
    <v-flex>
      {{ account.name }}
    </v-flex>
    <v-flex xs2 md1>
      <v-btn color="primary" @click="logout">
        Logout
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  asyncData () {
    // TODO: get data from backend
    return {
      account: {
        name: 'Student',
      },
    };
  },
  methods: {
    async logout () {
      await fetch('/api/v1/auth/logout');
      window.location.href = '/'; // TODO: proper cache cleaning
    },
  },
  middleware: ['auth'],
});
</script>
