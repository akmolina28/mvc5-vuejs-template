using mvc5_vuejs_template.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mvc5_vuejs_template.Services
{
    public class MovieService : IMovieService
    {
        private static List<MovieModel> _movieContext = new List<MovieModel>()
        {
            new MovieModel()
            {
                Id = 1,
                Title = "Jurrasic Park",
                Director = "Steven Spielberg",
                Year = 1993,
                Studio = "Universal Pictures"
            },
            new MovieModel()
            {
                Id = 2,
                Title = "Alien",
                Director = "Ridley Scott",
                Year = 1979,
                Studio = "20th Century Fox"
            },
            new MovieModel()
            {
                Id = 3,
                Title = "Titanic",
                Director = "James Cameron",
                Year = 1997,
                Studio = "Paramount Pictures"
            }
        };

        public IEnumerable<MovieModel> GetMovies()
        {
            return _movieContext;
        }

        public int InsertMovie(MovieModel model)
        {
            int id = _movieContext.Last().Id + 1;

            model.Id = id;
            _movieContext.Add(model);
            return id;
        }
    }
}