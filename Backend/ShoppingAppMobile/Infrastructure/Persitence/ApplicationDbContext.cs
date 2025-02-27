using Microsoft.EntityFrameworkCore;
using ShoppingAppMobile.Core.Domain.Entities;
using System.Reflection.Emit;

namespace ShoppingAppMobile.Infrastructure.Persitence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Notification> Notifications { get; set; }
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
            modelBuilder.Entity<Customer>(entity =>{entity.ToTable("Customer"); entity.HasIndex(c => c.Email).IsUnique(); });
            modelBuilder.Entity<Review>(entity =>{entity.ToTable("Review");});
            modelBuilder.Entity<Cart>(entity => { entity.ToTable("Cart"); });
            modelBuilder.Entity<Order>(entity => { entity.ToTable("Order"); });
            modelBuilder.Entity<Payment>(entity => { entity.ToTable("Payment"); });
            modelBuilder.Entity<Notification>(entity => { entity.ToTable("Notification"); });
        }
    }
}
