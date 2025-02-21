using Microsoft.EntityFrameworkCore;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Infrastructure.Persitence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Configure entity relationships here if needed
            modelBuilder.Entity<Product>(entity =>
                        {
                            entity.ToTable("Product");
                            entity.Property(p => p.Price)
                                  .HasColumnType("decimal(10,2)");
                            entity.Property(p => p.Name)
                                  .IsRequired()
                                  .HasMaxLength(255);
                            entity.Property(p => p.Description)
                                  .IsRequired(false);
                            entity.Property(p => p.Rating)
                                  .HasColumnType("float");
                            entity.Property(p => p.IsDeleted)
                                  .HasDefaultValue(false);
                        });
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");
            });
        }
    }
}
