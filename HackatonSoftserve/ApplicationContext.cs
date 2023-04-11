using HackatonSoftserve.Models;
using Microsoft.EntityFrameworkCore;

namespace HackatonSoftserve
{
    public class ApplicationContext : DbContext
    {

        public DbSet<User> Users { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>().HasKey(el => el.Id);
            builder.Entity<User>().HasIndex(el => el.Email).IsUnique();
            builder.Entity<User>().HasIndex(el => el.Password).IsUnique();
        }
    }
}
