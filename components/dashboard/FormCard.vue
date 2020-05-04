<template>
  <v-card>
    <v-card-title>
      {{ course }} - {{ title }}
    </v-card-title>
    <v-card-text>
      Something
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn :to="`/forms/${id}`" nuxt>
        {{ progress == 0 ? 'Start' : 'Continue' }}
      </v-btn>
    </v-card-actions>
    <v-progress-linear bottom :value="progress" />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
  },
});
</script>
