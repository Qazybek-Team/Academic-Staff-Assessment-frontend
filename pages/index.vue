<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          Welcome!
        </v-card-title>
        <v-card-text>
          <p>Please sign in.</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  middleware ({ store, redirect }) {
    if (store.getters.authenticated) {
      return redirect('/dashboard');
    }
  },
});
</script>
