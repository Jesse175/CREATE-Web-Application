namespace AthenaAPI.Models
{
    public class Note
    {
        public Guid NoteID  { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Description { get; set; }
    }
}
