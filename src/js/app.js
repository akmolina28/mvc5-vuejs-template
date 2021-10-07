import Vue from 'vue';

import VueRouter from 'vue-router';

// load ALL solid icons
// modify here to load individual icons as needed to reduce bundle size
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';

import Layout from '../components/Layout.vue';

Vue.use(VueRouter);
library.add(fas);
Vue.component('icon', FontAwesomeIcon);

require('../sass/app.scss');

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {
    Layout,
  },
});
