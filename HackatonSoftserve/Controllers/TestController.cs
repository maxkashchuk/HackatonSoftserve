using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HackatonSoftserve.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {

        private readonly ILogger<TestController> _logger;

        public TestController(ILogger<TestController> logger)
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
