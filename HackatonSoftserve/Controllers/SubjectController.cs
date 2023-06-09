﻿using HackatonSoftserve.Models.AuthModelsAdmin;
using HackatonSoftserve.Models;
using Microsoft.AspNetCore.Mvc;
using HackatonSoftserve.Models.AddModelsSubject;
using Microsoft.EntityFrameworkCore;
using HackatonSoftserve.Models.RatingModels;

namespace HackatonSoftserve.Controllers
{
    [ApiController]
    [Route("api/subject")]
    public class SubjectController : ControllerBase
    {
        ApplicationContext _AppContext;

        public SubjectController(ApplicationContext _AppContext)
        {
            this._AppContext = _AppContext;
        }

        [Route("addsubject")]
        [HttpPost]
        async public Task<ActionResult> AddSubject(AddSubject user)
        {
            if (user != null)
            {
                Subject s = new Subject()
                {
                    Name = user.Name,
                    Description = user.Description
                };
                await _AppContext.Subjects.AddAsync(s);
                await _AppContext.SaveChangesAsync();
                return Ok(s);
            }
            return BadRequest();
        }

        [Route("ratingcount")]
        [HttpPost]
        async public Task<ActionResult> RatingCount(SubjectRating sr)
        {
            if (sr != null)
            {
                Subject s = await _AppContext.Subjects.Where(el => el.Name == sr.SubjectName).FirstOrDefaultAsync();
                if(s != null)
                {
                    s.Rating = (sr.Material + sr.WishStudent) / 2;
                    //await _AppContext.SaveChangesAsync();
                    //sr.WishStudent + 
                    //await _AppContext.Subjects.AddAsync(s);
                    //await _AppContext.SaveChangesAsync();
                    _AppContext.Update(s);
                    await _AppContext.SaveChangesAsync();
                    return Ok(s);
                }
            }
            return BadRequest();
        }

        //[Route("attachuser")]
        //[HttpPost]
        //async public Task<ActionResult> AttachUser(AddSubject user)
        //{
        //    if (user != null)
        //    {
        //        Subject s = new Subject()
        //        {
        //            Name = user.Name,
        //            Description = user.Description
        //        };
        //        await _AppContext.Subjects.AddAsync(s);
        //        await _AppContext.SaveChangesAsync();
        //        return Ok(s);
        //    }
        //    return BadRequest();
        //}

        [Route("delsubject")]
        [HttpPost]
        async public Task<ActionResult> DeleteSubject(DelSubject str)
        {
            if (str != null)
            {
                Subject s = await _AppContext.Subjects.Where(el => el.Name == str.Name).FirstOrDefaultAsync();
                _AppContext.Remove(s);
                await _AppContext.SaveChangesAsync();
                return Ok(s);
            }
            return BadRequest();
        }

        [Route("subjectsget")]
        [HttpGet]
        async public Task<ActionResult> Example()
        {
            List<Subject> s = await _AppContext.Subjects.ToListAsync();
            return Ok(s);
        }
    }
}
