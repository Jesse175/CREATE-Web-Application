namespace AthenaAPI.Models
{
    public class StudentQuest
    {
        public Guid StudentID { get; set; }
        public Guid QuestID { get; set; }
        public bool Completed { get; set; }
        public DateTime LastActivityDate { get; set; }
    }
}
