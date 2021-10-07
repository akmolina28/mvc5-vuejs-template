using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mvc5_vuejs_template.Models
{
    public class MovieModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int Year { get; set; }

        public string Director { get; set; }

        public string Studio { get; set; }
    }
}