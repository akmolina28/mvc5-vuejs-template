using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvc5_vuejs_template.Controllers
{
    public class SpaController : Controller
    {
        public ActionResult Index()
        {
            return File("~/dist/index.html", "text/html");
        }
    }
}