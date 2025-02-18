using Microsoft.EntityFrameworkCore;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Infrastructure.Persitence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Configure entity relationships here if needed
            modelBuilder.Entity<Product>().ToTable("Product");
        }
    }
}
