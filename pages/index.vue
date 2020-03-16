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
            <br />
            <span v-if="user.group.includes('Students')">
              User is a student!
            </span>
            <span v-else>
              User is not a student! Groups: {{ user.group }}
            </span>
          </p>
          <p v-else>
            Not logged in!
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            href="https://innopoints-backend.herokuapp.com/api/v1/auth/sso?from=http://localhost:3000"
            v-if="user == null"
          >
            Sign in
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      user: null,
    };
  },
  async mounted () {
    // console.log(context);
    try {
      const res = await fetch('https://innopoints-backend.herokuapp.com/api/v1/auth/sso-info', {
        credentials: 'include',
      });
      const json = await res.json();
      this.user = json;
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  },
});
</script>
