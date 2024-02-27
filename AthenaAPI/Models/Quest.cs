namespace AthenaAPI.Models
{
    public class Quest
    {
        public Guid QuestID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        //should exp be included here as well?
    }
}
