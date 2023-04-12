using System.ComponentModel.DataAnnotations.Schema;

namespace HackatonSoftserve.Models.RatingModels
{
    [NotMapped]
    public class TeacherRating
    {
        public string TeacherEmail { get; set; }

        public int StudyingQuality { get; set; }
        public int StimulatingStudents { get; set; }
    }
}
