using AthenaAPI.Data;
using AthenaAPI.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace AthenaAPI.Utilities
{
    public class Quests
    {
        public static List<Quest> GetQuests()
        {
            try
            {
                SqlConnection con = SqlHelper.GetConnection();

                using (con)
                {
                    SqlCommand command = new SqlCommand("GetQuests", con);
                    command.CommandType = CommandType.StoredProcedure;
                    con.Open();

                    SqlDataReader reader = command.ExecuteReader();

                    // Let's create a new Module list to read the result
                    List<Quest> quests = new List<Quest>();

                    while (reader.Read())
                    {
                        // New Module object
                        Quest quest = new Quest();
                        quest.QuestID = Guid.Parse(reader["QuestID"].ToString());
                        quest.ModuleID = Guid.Parse(reader["ModuleID"].ToString());
                        quest.Name = reader["Name"].ToString();
                        quest.Description = reader["Description"].ToString();
                        quest.ExpGain = (int)reader["ExpGain"];
                        quests.Add(quest);
                    }

                    con.Close();
                    return quests;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return new List<Quest>();
            }
        }
    }
}
