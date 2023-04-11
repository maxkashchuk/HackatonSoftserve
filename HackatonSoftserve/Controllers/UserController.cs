using HackatonSoftserve.Models;
using HackatonSoftserve.Models.AuthModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HackatonSoftserve.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserControlelr : ControllerBase
    {
        ApplicationContext _AppContext;

        private readonly ILogger<TestController> _logger;

        public UserControlelr(ApplicationContext _AppContext, ILogger<TestController> logger)
        {
            this._AppContext = _AppContext;
            _logger = logger;
        }

        [Route("signin")]
        [HttpPost]
        public ActionResult SignIn(SignInUser user)
        {
            if (user != null)
            {
                User? u = _AppContext.Users.Where(el => el.Email == user.Email && el.Password == user.Password).FirstOrDefault();
                if (u != null)
                {
                    return Ok(u);
                }
                return BadRequest();
            }
            return BadRequest();
        }

        [Route("signup")]
        [HttpPost]
        async public Task<ActionResult> SignUp(SignUpUser user)
        {
            if (user != null)
            {
                User u = new User()
                {
                    Name = user.Name,
                    Surname = user.Surname,
                    Email = user.Email,
                    Password = user.Password,
                    Role = user.Role,
                    Faculty = user.Faculty,
                    Group = user.Group,
                    Image = user.Image,
                };
                await _AppContext.Users.AddAsync(u);
                await _AppContext.SaveChangesAsync();
                return Ok(u);
            }
            return BadRequest();
        }

        [Route("example")]
        [HttpGet]
        async public Task<ActionResult> Example()
        {
            return Ok();
        }
    }
}
