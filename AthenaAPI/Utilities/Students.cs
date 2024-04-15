using AthenaAPI.Data;
using AthenaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace AthenaAPI.Utilities
{
    public class Students
    {
        public static List<StudentRole> GetStudents()
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();

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
                SqlConnection con = SqlHelper.GetConnection();

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

        public static List<MentorRole> GetStudentMentors(Guid id)
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();

                using (con)
                {
                    SqlCommand command = new SqlCommand("GetStudentMentors", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@StudentID", id));
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    // Let's create a new MentorRole list to read the result
                    List<MentorRole> mentors = new List<MentorRole>();

                    while (reader.Read())
                    {
                        // New Role object and Mentor object
                        MentorRole mentor = new MentorRole();
                        Mentor mt = new Mentor();
                        mentor.RoleID = Guid.Parse(reader["MentorID"].ToString());
                        mt.FirstName = reader["FirstName"].ToString();
                        mt.LastName = reader["LastName"].ToString();
                        mt.Email = reader["Email"].ToString();
                        mt.JobTitle = reader["JobTitle"].ToString();
                        mt.Availability = reader["Availability"].ToString();
                        mentor.Mentor = mt;
                        mentors.Add(mentor);
                    }

                    con.Close();
                    return mentors;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new List<MentorRole>();
            }
        }

        public static StudentRole AddStudent(Guid UserID)
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();

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

        public static Boolean UpdateStudent(StudentRole student)
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();

                using (con)
                {
                    SqlCommand command = new SqlCommand("UpdateStudent", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@StudentID", student.RoleID));
                    command.Parameters.Add(new SqlParameter("@Exp", student.Student.Exp));
                    command.Parameters.Add(new SqlParameter("@Availability", student.Student.Availability));
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    Boolean result = false;
                    if (reader.Read())
                    {
                        if (reader.GetBoolean(0))
                        {
                            result = true;
                        }
                    }
                    con.Close();
                    return result;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }

        public static Boolean SaveStudentMentors(Guid id, List<MentorRole> updatedMentors)
        {
            // Create DataTable
            DataTable updated = new DataTable();
            updated.Columns.Add("StudentID", typeof(Guid));
            updated.Columns.Add("MentorID", typeof(Guid));

            updatedMentors.ForEach(x => updated.Rows.Add(new Object[] { id, x.RoleID }));

            try
            {
                SqlConnection con = SqlHelper.GetConnection();

                using (con)
                {

                    SqlCommand command = new SqlCommand("SaveStudentMentors", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@StudentID", id));
                    command.Parameters.AddWithValue("@Updated", updated);
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();
                    Boolean result = false;
                    if (reader.Read())
                    {
                        if (reader.GetBoolean(0))
                        {
                            result = true;
                        }
                    }
                    con.Close();
                    return result;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }
    }
}
