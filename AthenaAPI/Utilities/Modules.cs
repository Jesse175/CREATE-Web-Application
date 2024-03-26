using AthenaAPI.Data;
using AthenaAPI.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace AthenaAPI.Utilities
{
    public class Modules
    {
        public static List<Module> GetModules()
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();

                using (con)
                {
                    SqlCommand command = new SqlCommand("GetModules", con);
                    command.CommandType = CommandType.StoredProcedure;
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    // Let's create a new Module list to read the result
                    List<Module> modules = new List<Module>();

                    while (reader.Read())
                    {
                        // New Module object
                        Module mod = new Module();
                        mod.ModuleID = Guid.Parse(reader["ModuleID"].ToString());
                        mod.Name = reader["Name"].ToString();
                        mod.Color = reader["Color"].ToString();
                        mod.Description = reader["Description"].ToString();
                        modules.Add(mod);
                    }

                    con.Close();
                    return modules;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new List<Module>();
            }
        }
    }
}
