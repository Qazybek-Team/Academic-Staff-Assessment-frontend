<template>
  <v-layout
    column
  >
    <v-form>
      <v-flex
        v-for="(q, i) in questions"
        :key="q.id"
        xs12
        md11
      >
        <Question
          v-model="answers[i]"
          v-bind="q"
        />
      </v-flex>
      <v-btn v-if="completed" @click="submit">
        Submit
      </v-btn>
      <v-btn v-else @click="save">
        Save for later
      </v-btn>
    </v-form>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Question from '@/components/dashboard/forms/Question.vue';

export default Vue.extend({
  components: {
    Question,
  },
  asyncData () {
    // TODO: get from backend
    return {
      questions: [
        { id: 1, questionText: 'How are you?', type: 'mcq', options: ['good', 'fine', 'normal', 'bad'] },
        { id: 2, questionText: 'What do you think about the course?', type: 'text', hint: 'say amazing' },
        { id: 3, questionText: 'How much do you love the course?', type: 'scalar', hint: '0 - bad; 100 - good' },
      ],
    };
  },
  data () {
    return {
      answers: [] as string[],
    };
  },
  computed: {
    completed (): boolean {
      return this.answers.every(a => a != null);
    },
  },
  methods: {
    save () {

    },
    submit () {

    },
  },
  middleware: ['auth'],
});
</script>
