using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace mvc5_vuejs_template
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // API routes for CRUD operations
            routes.MapRoute(
                name: "API",
                url: "api/{controller}/{action}/{id}",
                defaults: new { id = UrlParameter.Optional }
            );

            // SPA route to return index.html
            routes.MapRoute(
                name: "SPA",
                url: "{*catchall}",
                defaults: new { controller = "Spa", action = "Index" }
            );
        }
    }
}
