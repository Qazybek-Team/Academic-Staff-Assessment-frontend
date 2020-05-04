<template>
  <v-card flat>
    <v-card-title>{{ questionText }}</v-card-title>
    <v-card-text>
      <v-text-field v-if="type === 'text'" solo :hint="hint" />
      <v-slider v-else-if="type === 'scalar'" step="5" :hint="hint" :ticks="true" thumb-label />
      <v-radio-group v-else-if="type === 'mcq'">
        <v-radio v-for="option in options" :key="option" :value="option" :label="option" />
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

const allowedTypes = ['text', 'scalar', 'mcq'];

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
      validator: type => allowedTypes.includes(type),
    },
    required: {
      type: Boolean,
      default: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
      validator (options) {
        return this === undefined || this.type !== 'mcq' || options.length > 0;
      },
    },
  },
});
</script>
