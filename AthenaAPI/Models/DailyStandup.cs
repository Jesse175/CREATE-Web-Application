namespace AthenaAPI.Models
{
    public class DailyStandup
    {
        public Guid ID { get; set; }
        public DateTime DateCreated { get; set; }
        public string Description { get; set; }
    }
}
