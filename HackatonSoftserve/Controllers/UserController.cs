using HackatonSoftserve.Models;
using HackatonSoftserve.Models.AuthModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HackatonSoftserve.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserControlelr : ControllerBase
    {
        ApplicationContext _AppContext;

        public UserControlelr(ApplicationContext _AppContext)
        {
            this._AppContext = _AppContext;
        }

        [Route("signin")]
        [HttpPost]
        public ActionResult SignIn(SignInUser user)
        {
            if(user != null)
            {
                User? u = _AppContext.Users.Where(el => el.Email == user.Email || el.Password == user.Password).FirstOrDefault();
                if(u != null)
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
            if(user != null)
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
                _AppContext.Users.Add(u);
                await _AppContext.SaveChangesAsync();
                return Ok(u);
            }
            return BadRequest();
        }
    }
}
