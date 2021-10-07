import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import MovieIndex from '../components/Movie/Index.vue';
import MovieCreate from '../components/Movie/Create.vue';

const routes = [
  {
    path: '/',
    name: 'default',
    component: HelloWorld,
  },
  {
    path: '/movies',
    name: 'movie_index',
    component: MovieIndex,
  },
  {
    path: '/movies/create',
    name: 'movie_create',
    component: MovieCreate,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active', // apply bulma class when a router link is active
});
