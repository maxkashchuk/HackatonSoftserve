using Microsoft.AspNetCore.Mvc;

namespace HackatonSoftserve.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [Route("example")]
        [HttpGet]
        public ActionResult Example()
        {
            return Ok("All is good");
        }
    }
}