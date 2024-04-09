namespace AthenaAPI.Models
{
    public class DailyStandup
    {
        public Guid StandupID { get; set; }
        public Guid UserID { get; set; }
        public DateTime DateCreated { get; set; }
        public string? Description { get; set; }
    }
}