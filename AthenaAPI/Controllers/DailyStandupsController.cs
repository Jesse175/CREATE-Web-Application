using AthenaAPI.Utilities;
using Microsoft.AspNetCore.Mvc;
using AthenaAPI.Data;
using AthenaAPI.Models;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;

namespace AthenaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DailyStandupsController : ControllerBase
    {

        private readonly DataContext _context;

        public DailyStandupsController(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Controller method for retrieving all standups.
        /// </summary>
        /// <returns>
        /// A Collection of standups.
        /// </returns>
        /// 
        // GET: api/DailyStandups
        //[HttpGet]
        //public async Task<ActionResult<List<DailyStandup>>> GetDailyStandups()
        //{
        //    return Utilities.DailyStandups.GetDailyStandups();
        //}
        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<List<DailyStandup>>> GetDailyStandups(Guid id)
        {
            try
            {
                var dailyStandups = await Task.Run(() => Utilities.DailyStandups.GetDailyStandups(id));
                return dailyStandups;
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while fetching daily standups.");
            }
        }

        [HttpPut("Update")]
        public async Task<IActionResult> UpdateDailyStandups([FromBody] JObject standup)
        {
            try
            {
                // Deserialize JSON object to get standupID and newDescription
                Guid standupID = Guid.Parse(standup["standupID"].ToString());
                string newDescription = standup["description"].ToString();

                // Call your utility method to update the daily standup
                bool updateResult = Utilities.DailyStandups.UpdateDailyStandups(standupID, newDescription);

                if (updateResult)
                {
                    return Ok(true);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                // Handle any exceptions
                return StatusCode(500, ex.Message);
            }
        }

        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateDailyStandups(Guid id, DailyStandup @standup)
        //{
        //    if(id != standup.StandupID)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(@standup).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch(DbUpdateConcurrencyException)
        //    {
        //        if (!DailyStandupExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        private bool DailyStandupExists(Guid id)
        {
            return (_context.DailyStandup?.Any(e => e.StandupID == id)).GetValueOrDefault();
        }
    }
}
