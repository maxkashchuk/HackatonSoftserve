namespace HackatonSoftserve.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string Description { get; set; }
        public User Student { get; set; }
    }
}
