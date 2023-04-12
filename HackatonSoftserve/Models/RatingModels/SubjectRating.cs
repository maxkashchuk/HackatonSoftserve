using System.ComponentModel.DataAnnotations.Schema;

namespace HackatonSoftserve.Models.RatingModels
{
    [NotMapped]
    public class SubjectRating
    {
        public string SubjectName { get; set; }
        public int Material { get; set; }
        public int WishStudent { get; set; }
    }
}
