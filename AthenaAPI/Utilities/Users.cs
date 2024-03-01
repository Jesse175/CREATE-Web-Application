using AthenaAPI.Data;
using AthenaAPI.Models;
using Microsoft.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace AthenaAPI.Utilities
{
    public class Users
    {
        public static bool CheckEmail(string email)
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();

                using (con)
                {
                    SqlCommand command = new SqlCommand("CheckEmail", con);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@Email", email));
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    bool result = false;

                    if (reader.Read())
                    {
                        if (reader.GetBoolean(0))
                        {
                            result = true;
                        }
                    }

                    reader.Close();
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

        public static User CheckLogin(string email, string password)
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();
                User user = new User();
                using (con)
                {
                    SqlCommand command = new SqlCommand("SELECT * FROM Athena.dbo.[User] WHERE Email = @Email AND Password = @Password", con);
                    command.Parameters.Add(new SqlParameter("@Email", email));
                    command.Parameters.Add(new SqlParameter("@Password", password));
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    if(reader.Read())
                    {
                        user = Users.GetUserByID(Guid.Parse(reader["UserID"].ToString()));
                    }

                    reader.Close();
                    con.Close();
                    return user;

                }
            } catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new User();
            }
        }

        public static User GetUserByID(Guid userId)
        {
            try
            {
                User returnedUser = new User();

                SqlConnection con = SqlHelper.GetConnection();
                using(con)
                {
                    SqlCommand command = new SqlCommand("SELECT * FROM Athena.dbo.[User] WHERE UserID = @UserId", con);
                    command.Parameters.Add(new SqlParameter("@UserId", userId));
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    if(reader.Read())
                    {
                        returnedUser.UserID = userId;
                        returnedUser.FirstName = reader["FirstName"].ToString();
                        returnedUser.LastName = reader["LastName"].ToString();
                        returnedUser.Email = reader["Email"].ToString();
                        returnedUser.Password = reader["Password"].ToString();
                    }

                    reader.Close();
                    con.Close();
                }
                return returnedUser;
            } catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new User();
            }
        }
    }
}
