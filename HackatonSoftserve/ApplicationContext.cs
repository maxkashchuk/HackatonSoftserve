using HackatonSoftserve.Models;
using Microsoft.EntityFrameworkCore;

namespace HackatonSoftserve
{
    public class ApplicationContext : DbContext
    {

        public DbSet<User> Users { get; set; }

        public DbSet<Teacher> Teachers { get; set; }

        public DbSet<Admin> Admins { get; set; }

        public DbSet<Subject> Subjects { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>().HasKey(el => el.UserId);
            builder.Entity<User>().HasIndex(el => el.Email).IsUnique();
            builder.Entity<User>().HasIndex(el => el.Password).IsUnique();
            builder.Entity<User>().HasMany(el => el.Teachers);

            builder.Entity<Teacher>().HasKey(el => el.TeacherId);
            builder.Entity<Teacher>().HasIndex(el => el.Email).IsUnique();
            builder.Entity<Teacher>().HasIndex(el => el.Password).IsUnique();
            builder.Entity<Teacher>().HasMany(el => el.Students);
        }
    }
}
