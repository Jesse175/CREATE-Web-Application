namespace AthenaAPI.Models
{
    public interface Role
    {
        Guid RoleID { get; set; }
        string Name { get; }
        object Person { get; }
    }

    public class StudentRole : Role
    {
        public Guid RoleID { get; set; }
        public string Name { get { return "Student"; } }
        public Student Student { get; set; }
        public object Person { get { return Student; } }
    }

    public class MentorRole : Role
    {
        public Guid RoleID { get; set; }
        public string Name { get { return "Mentor"; } }
        public Mentor Mentor { get; set; }
        public object Person { get { return Mentor; } }
    }
}
