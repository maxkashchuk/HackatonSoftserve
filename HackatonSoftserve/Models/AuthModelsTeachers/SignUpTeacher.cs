using System.ComponentModel.DataAnnotations.Schema;

namespace HackatonSoftserve.Models.AuthModelsTeachers
{
    [NotMapped]
    public class SignUpTeacher
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Faculty { get; set; }
        public string Image { get; set; }
        public string Subject { get; set; }
    }
}
