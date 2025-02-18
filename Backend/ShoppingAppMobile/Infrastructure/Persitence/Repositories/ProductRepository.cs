using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class ProductRepository: IProductRepository
    {
        private readonly ApplicationDbContext _context;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddProductAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }
    }
}
