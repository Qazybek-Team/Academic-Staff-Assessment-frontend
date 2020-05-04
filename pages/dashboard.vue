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
            :key="form.id"
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

import FormCard from '@/components/dashboard/FormCard.vue';

export default Vue.extend({
  components: {
    FormCard,
  },
  asyncData () {
    return {
      forms: [
        { id: 1, course: 'AI', title: 'Week 10', progress: 0 },
        { id: 2, course: 'DMDII', title: 'Week 11', progress: 25 },
        { id: 3, course: 'AI', title: 'Week 9', progress: 80 },
      ],
    };
  },
  computed: {
    ...mapState(['user']),
  },
  middleware: ['auth'],
});
</script>
