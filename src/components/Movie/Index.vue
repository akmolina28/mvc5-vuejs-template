<template>
  <section>
    <div class="mb-5">
      <h1 class="title">Movies</h1>
    </div>
    <div>
      <a class="button is-link mb-2" @click="$router.push('movies/create')">
        <icon icon="plus" class="mr-2"></icon>
        <span>Add Movie</span>
      </a>
    </div>
    <icon v-if="loading" icon="spinner" spin></icon>
    <table v-else class="table is-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Year</th>
          <th>Director</th>
          <th>Studio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <td>{{ movie.Id }}</td>
          <td>{{ movie.Title }}</td>
          <td>{{ movie.Year }}</td>
          <td>{{ movie.Director }}</td>
          <td>{{ movie.Studio }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MovieIndex',
  data() {
    return {
      loading: false,
      movies: [],
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.loading = true;
      axios.get('/api/movie/index')
        .then((data) => {
          this.movies = data.data;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('Error caught when getting movies from the api:');
          // eslint-disable-next-line no-console
          console.log(error);
        })
        .then(() => {
          this.loading = false;
        });
    },
  },
};
</script>
