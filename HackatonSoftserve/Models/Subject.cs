namespace HackatonSoftserve.Models
{
    public class Subject
    {
        public int SubjectId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<User>? Students { get; set; }
        public virtual ICollection<Comment>? Comments { get; set; }
        public int? Rating { get; set; }
    }
}
