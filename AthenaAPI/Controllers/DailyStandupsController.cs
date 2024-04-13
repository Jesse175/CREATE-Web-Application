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
    }
}
