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
using Microsoft.IdentityModel.Tokens;

namespace AthenaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        private readonly DataContext _context;

        public ModulesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Modules
        [HttpGet]
        public async Task<ActionResult<List<Module>>> GetModules()
        {
            return Utilities.Modules.GetModules();
        }

        // GET: api/Modules/StudentTotal
        [HttpGet("Modules/StudentTotal")]
        public async Task<ActionResult<List<JObject>>> GetModuleStudentTotal()
        {
            return Utilities.Modules.GetModuleStudentTotal();
        }

        // GET: api/Modules/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Module>> GetModule(Guid id)
        {
          if (_context.Modules == null)
          {
              return NotFound();
          }
            var @module = await _context.Modules.FindAsync(id);

            if (@module == null)
            {
                return NotFound();
            }

            return @module;
        }

        // PUT: api/Modules/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModule(Guid id, Module @module)
        {
            if (id != @module.ModuleID)
            {
                return BadRequest();
            }

            _context.Entry(@module).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModuleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Modules
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Module>> CreateModule([FromBody] JObject moduleData)
        {
            Module module = new Module();
            module.Name = moduleData["Name"].ToString();
            if (String.IsNullOrEmpty(moduleData["Color"].ToString()))
            {
                module.Color = "44897e";
            } else
                module.Color = moduleData["Color"].ToString();
            module.Description = moduleData["Description"].ToString();
            module.ModuleID = Guid.NewGuid();
            if (_context.Modules == null)
            {
                return Problem("Entity set 'DataContext.Module' is null.");
            }
            _context.Modules.Add(module);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetModule), new { id = module.ModuleID }, module);
        }

        // DELETE: api/Modules/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModule(Guid id)
        {
            if (_context.Modules == null)
            {
                return NotFound();
            }
            var @module = await _context.Modules.FindAsync(id);
            if (@module == null)
            {
                return NotFound();
            }

            _context.Modules.Remove(@module);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ModuleExists(Guid id)
        {
            return (_context.Modules?.Any(e => e.ModuleID == id)).GetValueOrDefault();
        }
    }
}
