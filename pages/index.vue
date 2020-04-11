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
          Welcome to the Academic Staff Assessment project
        </v-card-title>
        <v-card-text>
          <p>This goal of this project is to improve our educational process at Innopolis.</p>
          <p v-if="user != null">
            Logged in as {{ user.commonname }} ({{ user.email }})
            <br>
            <span v-if="user.group.includes('Students')">
              User is a student!
            </span>
            <span v-else>
              User is not a student! Groups: {{ user.group }}
            </span>
            <br>
            <v-btn color="primary" @click="logout">
              Logout
            </v-btn>
          </p>
          <p v-else>
            Not logged in!
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="user == null"
            color="primary"
            href="http://localhost/api/v1/auth/login"
          >
            Sign in
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async logout () {
      await fetch('/api/v1/auth/logout');
      window.location.reload();
    },
  },
});
</script>
