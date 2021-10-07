using mvc5_vuejs_template.Models;
using mvc5_vuejs_template.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvc5_vuejs_template.Controllers
{
    public class MovieController : Controller
    {
        private IMovieService _movieService;

        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        public JsonResult Index()
        {
            var movies = _movieService.GetMovies();
            return Json(movies.ToArray(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(MovieModel movie)
        {
            int insertedMovie = _movieService.InsertMovie(movie);
            return Json(insertedMovie);
        }
    }
}