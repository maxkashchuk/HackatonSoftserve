using HackatonSoftserve.Models.AuthModels;
using HackatonSoftserve.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HackatonSoftserve.Models.AuthModelsAdmin;
using Microsoft.EntityFrameworkCore;

namespace HackatonSoftserve.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdminController : ControllerBase
    {
        ApplicationContext _AppContext;

        public AdminController(ApplicationContext _AppContext)
        {
            this._AppContext = _AppContext;
        }

        [Route("signupadmin")]
        [HttpPost]
        async public Task<ActionResult> SignUpStudent(SignUpAdmin user)
        {
            if (user != null)
            {
                Admin a = new Admin()
                {
                    Name = user.Name,
                    Surname = user.Surname,
                    Email = user.Email,
                    Password = user.Password,
                    Role = user.Role
                };
                await _AppContext.Admins.AddAsync(a);
                await _AppContext.SaveChangesAsync();
                return Ok(a);
            }
            return BadRequest();
        }

        [Route("deladmin")]
        [HttpPost]
        async public Task<ActionResult> DeleteAdmin(DelAdmin str)
        {
            if (str != null)
            {
                Admin a = await _AppContext.Admins.Where(el => el.Email == str.Email).FirstOrDefaultAsync();
                _AppContext.Remove(a);
                await _AppContext.SaveChangesAsync();
                return Ok(a);
            }
            return BadRequest();
        }
    }
}
