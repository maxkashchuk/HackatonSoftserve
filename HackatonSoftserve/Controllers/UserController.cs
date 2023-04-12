using HackatonSoftserve.Models;
using HackatonSoftserve.Models.AuthModels;
using HackatonSoftserve.Models.AuthModelsTeachers;
using HackatonSoftserve.Models.RatingModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

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
                Teacher? t = _AppContext.Teachers.Where(el => el.Email == user.Email && el.Password == user.Password).FirstOrDefault();
                if (t != null)
                {
                    return Ok(t);
                }
                Admin? a = _AppContext.Admins.Where(el => el.Email == user.Email && el.Password == user.Password).FirstOrDefault();
                if (a != null)
                {
                    return Ok(a);
                }
                return BadRequest();
            }
            return BadRequest();
        }

        [Route("signupstudent")]
        [HttpPost]
        async public Task<ActionResult> SignUpStudent(SignUpUser user)
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

        [Route("signupteacher")]
        [HttpPost]
        async public Task<ActionResult> SignUpTeacher(SignUpTeacher user)
        {
            if (user != null)
            {
                Teacher u = new Teacher()
                {
                    Name = user.Name,
                    Surname = user.Surname,
                    Email = user.Email,
                    Password = user.Password,
                    Role = user.Role,
                    Faculty = user.Faculty,
                    Image = user.Image,
                    Subject = user.Subject,
                };
                await _AppContext.Teachers.AddAsync(u);
                await _AppContext.SaveChangesAsync();
                return Ok(u);
            }
            return BadRequest();
        }

        [Route("ratingcount")]
        [HttpPost]
        async public Task<ActionResult> RatingCount(TeacherRating sr)
        {
            if (sr != null)
            {
                Teacher t = await _AppContext.Teachers.Where(el => el.Email == sr.TeacherEmail).FirstOrDefaultAsync();
                if (t != null)
                {
                    t.Rating = (sr.StimulatingStudents + sr.StudyingQuality) / 2;
                    //await _AppContext.SaveChangesAsync();
                    //sr.WishStudent + 
                    //await _AppContext.Subjects.AddAsync(s);
                    //await _AppContext.SaveChangesAsync();
                    _AppContext.Update(t);
                    await _AppContext.SaveChangesAsync();
                    return Ok(t);
                }
            }
            return BadRequest();
        }

        [Route("teachersget")]
        [HttpGet]
        async public Task<ActionResult> Example()
        {
            List<Teacher> u = await _AppContext.Teachers.ToListAsync();
            return Ok(u);
        }
    }
}
