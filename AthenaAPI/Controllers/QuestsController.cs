using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AthenaAPI.Data;
using AthenaAPI.Models;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace AthenaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestsController : ControllerBase
    {
        private readonly DataContext _context;

        public QuestsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Quests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quest>>> GetQuest()
        {
          if (_context.Quest == null)
          {
              return NotFound();
          }
            return await _context.Quest.ToListAsync();
        }

        // GET: api/Quests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Quest>> GetQuest(Guid id)
        {
          if (_context.Quest == null)
          {
              return NotFound();
          }
            var quest = await _context.Quest.FindAsync(id);

            if (quest == null)
            {
                return NotFound();
            }

            return quest;
        }

        // PUT: api/Quests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("SaveQuest")]
        public async Task<IActionResult> PutQuest([FromBody] JObject questData)
        {
            Quest quest = new Quest();
            quest.QuestID = Guid.Parse(questData["QuestID"].ToString());
            quest.ModuleID = Guid.Parse(questData["ModuleID"].ToString());
            quest.Name = questData["Name"].ToString();
            quest.Description = questData["Description"].ToString();
            quest.ExpGain = Int32.Parse(questData["ExpGain"].ToString());

            Boolean updateResult = Utilities.Quests.UpdateQuest(quest);
            if (updateResult)
            {
                return Ok(true);
            }
            else
            {
                return NotFound();
            }
        }

        // POST: api/Quests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Quest>> CreateQuest([FromBody] JObject questData)
        {
            Quest quest = new Quest();
            quest.Name = questData["Name"].ToString();
            quest.Description = questData["Description"].ToString();
            quest.ExpGain = (int)questData["ExpGain"];
            quest.ModuleID = Guid.Parse(questData["ModuleID"].ToString());
            quest.QuestID = Guid.NewGuid();
          if (_context.Quest == null)
          {
              return Problem("Entity set 'DataContext.Quest'  is null.");
          }
            _context.Quest.Add(quest);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetQuest), new { id = quest.QuestID }, quest);
        }

        // DELETE: api/Quests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuest(Guid id)
        {
            if (_context.Quest == null)
            {
                return NotFound();
            }
            var quest = await _context.Quest.FindAsync(id);
            if (quest == null)
            {
                return NotFound();
            }

            _context.Quest.Remove(quest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuestExists(Guid id)
        {
            return (_context.Quest?.Any(e => e.QuestID == id)).GetValueOrDefault();
        }
    }
}
