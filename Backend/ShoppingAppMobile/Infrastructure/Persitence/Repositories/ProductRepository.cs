using Microsoft.EntityFrameworkCore;
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

        public async Task<Product> GetProductByIdAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null && !product.IsDeleted)
            {
                return product;
            }
            return null;
        }

        public async Task<List<Product>> GetProductsAsync()
        {
            return await _context.Products.Where(p => !p.IsDeleted).ToListAsync();
        }
        
        public async Task UpdateProductAsync(Product product)
        {
            var existingProduct = await _context.Products.FindAsync(product.ProductId);
            if (existingProduct != null)
            {
                existingProduct.Name = product.Name;
                existingProduct.Price = product.Price;
                existingProduct.Description = product.Description;
                existingProduct.Image = product.Image;
                existingProduct.Rating = product.Rating;
                existingProduct.AddedBy = product.AddedBy;
                existingProduct.IsDeleted = product.IsDeleted;

                _context.Products.Update(existingProduct);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new ArgumentException("Product not found");
            }
        }
        public async Task DeleteProductByIdAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                product.IsDeleted = true;
                _context.Products.Update(product);
                await _context.SaveChangesAsync();
            }
        }
    }
}
