using AthenaAPI.Utilities;
using Microsoft.AspNetCore.Mvc;
using AthenaAPI.Data;
using AthenaAPI.Models;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace AthenaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {

        private readonly DataContext _context;

        public StudentsController(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Controller method for retrieving all students.
        /// </summary>
        /// <returns>
        /// A Collection of Students.
        /// </returns>
        /// 
        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<List<StudentRole>>> GetStudents()
        {
            return Utilities.Students.GetStudents();
        }

        /// <summary>
        /// Controller method for retrieving a specific Student.
        /// </summary>
        /// <returns>
        /// A single Student.
        /// </returns>
        /// <param name="id">The Guid of the Student.</param>
        /// 
        // GET: api/Students/{Guid}
        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<StudentRole>> GetStudent(Guid id)
        {
            return Utilities.Students.GetStudent(id);
        }

        /// <summary>
        /// Controller method for updating a specific Student.
        /// </summary>
        /// <returns>
        /// An Action Result that represents whether or not the update was successful.
        /// </returns>
        /// <param name="id">The Guid of the Student.</param>
        /// <param name="user">The Student data sent in the body of the method.</param>
        /// 
        // PUT: api/Students/{Guid}
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Update")]
        public async Task<IActionResult> UpdateStudent([FromBody] JObject student)
        {
            StudentRole studentRole = new StudentRole();
            studentRole.Student = JsonConvert.DeserializeObject<Student>(student["person"].ToString());
            studentRole.RoleID = Guid.Parse(student["roleID"].ToString());

            Boolean updateResult = Utilities.Students.UpdateStudent(studentRole);
            if (updateResult)
            {
                return Ok(true);
            }
            else
            {
                return NotFound();
            }
        }

        /// <summary>
        /// Controller method for creating a new Student.
        /// </summary>
        /// <returns>
        /// The Student object that was created.
        /// </returns>
        /// <param name="studentData">The Student data sent as a JSON object through the method body.</param>
        /// 
        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudentRole>> CreateStudent([FromBody] JObject studentData)
        {
            // First create the User the Student will be associated with
            User user = new User();
            user.FirstName = studentData["FirstName"].ToString();
            user.LastName = studentData["LastName"].ToString();
            user.Email = studentData["Email"].ToString();
            user.Password = studentData["Password"].ToString();
            user.UserID = Guid.NewGuid();
            if (_context.Users == null)
            {
                return Problem("Entity set 'DataContext.Users' is null.");
            }
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Then create and return the new Student!
            return Utilities.Students.AddStudent(user.UserID);
        }
    }
}
