# mvc5-vuejs-template
ASP.NET MVC 5 starter project with Vue.js frontend. Single-page application with client-side routing.

*** Full write-up now available *** https://kleypot.com/vue-js-single-page-application-asp-net-mvc-5/

## Clone and Build

The only dependencies for this template are recent versions of Visual Studio and [Node.js](https://nodejs.org/en/).

1. Clone the repo
2. Build/Debug the project using Visual Studio

## Hot Reloading

[Hot Reloading](https://vue-loader.vuejs.org/guide/hot-reload.html) is enabled in this template. Follow these steps for the best Vue.js development experience.

*After starting the Visual Studio debugger:*

1. Run webpack dev server

```
$ npm run hot
```

2. Open a browser and navigate to

```
http://localhost:8080
```

3. Edit and save any .vue, .js, or .scss to utilize hot reloading.

## Additional Information

### Routing

This is a single-page application (SPA). The MVC project has a single catch-all route which returns [index.html](src/index.html). This html file contains the Vue application which handles the SPA routing using [Vue Router](src/js/router.js).

The MVC project also has an API route for all server-side CRUD operations. These routes are prefixed with `/api`. For example, the route `/api/movie/index` will activate the Index() action on MovieController. The API actions generally return JSON.

### NPM Scripts

Several npm scripts are available to manage the webpack build:

* `npm run dev` - generate bundles for development
* `npm run prod` - generate bundles for production
* `npm run watch` - generate bundles for development, watch and rebundle on file changes
* `npm run hot` - run the SPA using webpack dev server with hot reloading (the VS debugger also needs to be started when testing with API routes)
* `npm run sync` - run the SPA using [Browsersync](https://browsersync.io/) for testing in multiple browsers/viewports
* `npm run lint` - manually run ESLint (ESlint is automatically run during the dev and prod builds)

### MSBuild

The MSBuild process has been modified to automatically run webpack whenever the project is built or published. The automation depends on your selected Build Configuration:

* Debug - runs `npm install` and `npm run dev`, then MSBuild
* Release - runs `npm install` and `npm run prod`, then MSBuild
* Unit Test - runs MSBuild only to help speed up .NET automated tests


### ESLint

This template also includes [ESLint](https://eslint.org/) integrated in the webpack build. Building the project will automatically lint the source code. The prod configuration will error out on lint errors, but the dev build will only log warnings. If you have problems with the build, check the output for possible lint errors.

<a href="https://www.buymeacoffee.com/akmolina28" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 144px !important;" ></a>
