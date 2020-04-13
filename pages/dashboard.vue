<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-card tile flat width="100%">
      <v-card-title class="headline">
        Available forms
      </v-card-title>
      <v-card-text>
        <v-layout row>
          <v-flex
            v-for="form in forms"
            :key="form.course+form.title"
            style="padding: 0.5em;"
            xs12
            sm6
            md3
          >
            <FormCard v-bind="form" />
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import FormCard from '@/components/dashboard/FormCard';

export default Vue.extend({
  components: {
    FormCard,
  },
  data () {
    return {
      forms: [
        { course: 'AI', title: 'Week 10', progress: 0 },
        { course: 'DMDII', title: 'Week 11', progress: 25 },
        { course: 'AI', title: 'Week 9', progress: 80 },
      ],
    };
  },
  computed: {
    ...mapState(['user']),
  },
  middleware: ['auth'],
});
</script>
