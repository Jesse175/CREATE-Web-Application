using AthenaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AthenaAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>().ToTable("user");
        }

        public DbSet<AthenaAPI.Models.Module>? Module { get; set; }

        public DbSet<AthenaAPI.Models.Quest>? Quest { get; set; }
    }
}
