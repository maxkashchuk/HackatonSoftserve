using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HackatonSoftserve.Models
{
    public class Teacher
    {
        public int TeacherId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Faculty { get; set; }
        public string Image { get; set; }
        public string Subject { get; set; }
        public virtual ICollection<User>? Students { get; set; }
        public virtual ICollection<Comment>? Comments { get; set; }
        public int? Rating { get; set; }
    }
}
