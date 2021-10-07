<template>
  <div>
    <div class="mb-5">
      <h1 class="title">Create Movie</h1>
    </div>
    <div class="columns">
      <div class="column is-half">
        <form @submit.prevent="submitForm">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input v-model="title" class="input" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Year</label>
            <div class="control">
              <input v-model="year" class="input" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Director</label>
            <div class="control">
              <input v-model="director" class="input" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Studio</label>
            <div class="control">
              <input v-model="studio" class="input" type="text" />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <a class="button is-link is-light"
                 @click="$router.push('/movies')">
                Cancel
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      year: '',
      director: '',
      studio: '',
    };
  },
  methods: {
    submitForm() {
      axios
        .post('/api/movie/create', {
          Title: this.title,
          Year: this.year,
          Director: this.director,
          Studio: this.studio,
        })
        .then(() => {
          this.$router.push('/movies');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('Error caught when getting movies from the api:');
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>
