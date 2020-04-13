<template>
  <v-app>
    <v-app-bar
      dense
      fixed
      app
    >
      <v-btn
        icon
        to="/"
        nuxt
      >
        <!-- TODO: replace with logo -->
        IU
      </v-btn>
      <v-toolbar-title>Academic Staff Assessment</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
      >
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        v-if="authenticated"
        to="/profile"
        nuxt
        icon
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn
        v-else
        text
        :href="`${base}/auth/login`"
      >
        Sign in
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      fixed
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import { API_URL } from '@/env';

export default Vue.extend({
  data () {
    return {
      base: API_URL,
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['authenticated']),
  },
});
</script>
