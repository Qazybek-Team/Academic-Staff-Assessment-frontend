<template>
  <v-card flat>
    <v-card-title>{{ questionText }}</v-card-title>
    <v-card-text>
      <v-text-field v-if="type === 'text'" solo :value="value" :hint="hint" @change="$emit('input', $event)" />
      <v-slider
        v-else-if="type === 'scalar'"
        step="5"
        :value="value"
        :hint="hint"
        :ticks="true"
        thumb-label
        @change="$emit('input', $event)"
      />
      <v-radio-group v-else-if="type === 'mcq'" :value="value" @change="$emit('input', $event)">
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
    value: {
      type: [String, Number],
      default: '',
    },
  },
});
</script>
