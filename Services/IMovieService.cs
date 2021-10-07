using mvc5_vuejs_template.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mvc5_vuejs_template.Services
{
    public interface IMovieService
    {
        IEnumerable<MovieModel> GetMovies();

        int InsertMovie(MovieModel model);
    }
}