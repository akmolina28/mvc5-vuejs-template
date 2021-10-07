<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h4 class="heading is-size-4">Mvc5 + Vue.js</h4>
        </a>

        <a role="button"
           :class="`navbar-burger ${menuActive ? 'is-active' : ''}`"
           aria-label="menu"
           aria-expanded="false"
           data-target="navbarBasicExample"
           @click="menuActive = !menuActive">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample"
           :class="`navbar-menu ${menuActive ? 'is-active' : ''}`">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>

          <router-link to="/movies" class="navbar-item">
            <span class="icon has-text-primary">
              <icon icon="film"></icon>
            </span>
            <span>Movies</span>
          </router-link>

          <a class="navbar-item">
            <span class="icon has-text-info">
              <icon icon="info-circle"></icon>
            </span>
            <span>About</span>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <transition name="fade" mode="out-in">
        <slot></slot>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/mixins";

@media screen and (min-width: $widescreen) {
  .navbar {
    font-size: 1.125rem;
    padding: 2rem 0;
  }
}

@media screen and (min-width: $desktop) {
  .navbar {
    padding: 1rem 0;
  }
}

.navbar-item > .icon {
  margin-left: -0.25rem;
  margin-right: 0.25rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
