using AthenaAPI.Data;
using Microsoft.EntityFrameworkCore;
using AthenaAPI.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace AthenaAPI.Utilities
{
    public class Students
    {
        public static DataContext _context;
        public Students(DataContext context)
        {
            _context = context;
        }

        public static List<StudentRole> GetStudents()
        {
            try
            {
                SqlConnection con = new SqlConnection(_context.Database.GetConnectionString());

                using (con)
                {
                    SqlCommand command = new SqlCommand("GetStudents", con);
                    command.CommandType = CommandType.StoredProcedure;
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    // Let's create a new StudentRole list to read the result
                    List<StudentRole> students = new List<StudentRole>();

                    while (reader.Read())
                    {
                        // New Role object and Student object
                        StudentRole student = new StudentRole();
                        Student st = new Student();
                        student.RoleID = Guid.Parse(reader["StudentID"].ToString());
                        st.FirstName = reader["FirstName"].ToString();
                        st.LastName = reader["LastName"].ToString();
                        st.Email = reader["Email"].ToString();
                        st.Exp = Int32.Parse(reader["Exp"].ToString());
                        st.Availability = reader["Availability"].ToString();
                        student.Student = st;
                        students.Add(student);
                    }

                    con.Close();
                    return students;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new List<StudentRole>();
            }
        }

        public static StudentRole GetStudent(Guid id)
        {
            try
            {
                SqlConnection con = new SqlConnection(_context.Database.GetConnectionString());

                using (con)
                {
                    SqlCommand command = new SqlCommand("GetStudent", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@StudentID", id));
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    // Let's create a new StudentRole object to read the result
                    StudentRole student = new StudentRole();

                    if (reader.Read())
                    {
                        // New Student object
                        Student st = new Student();
                        student.RoleID = Guid.Parse(reader["StudentID"].ToString());
                        st.FirstName = reader["FirstName"].ToString();
                        st.LastName = reader["LastName"].ToString();
                        st.Email = reader["Email"].ToString();
                        st.Exp = Int32.Parse(reader["Exp"].ToString());
                        st.Availability = reader["Availability"].ToString();
                        student.Student = st;
                    }

                    con.Close();
                    return student;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new StudentRole();
            }
        }

        public static StudentRole AddStudent(Guid UserID)
        {
            try
            {
                SqlConnection con = new SqlConnection(_context.Database.GetConnectionString());

                using (con)
                {
                    SqlCommand command = new SqlCommand("AddStudent", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@UserID", UserID));
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    // Let's create a new StudentRole object to read the result
                    StudentRole student = new StudentRole();

                    if (reader.Read())
                    {
                        // New Student object
                        Student st = new Student();
                        student.RoleID = Guid.Parse(reader["StudentID"].ToString());
                        st.FirstName = reader["FirstName"].ToString();
                        st.LastName = reader["LastName"].ToString();
                        st.Email = reader["Email"].ToString();
                        st.Exp = Int32.Parse(reader["Exp"].ToString());
                        st.Availability = reader["Availability"].ToString();
                        student.Student = st;
                    }

                    con.Close();
                    return student;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new StudentRole();
            }
        }
    }
}
