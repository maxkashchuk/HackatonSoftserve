using System.ComponentModel.DataAnnotations.Schema;

namespace HackatonSoftserve.Models.AuthModels
{
    [NotMapped]
    public class SignInUser
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
