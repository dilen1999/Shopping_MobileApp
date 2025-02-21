using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Interfaces
{
    public interface IProductRepository
    {
        Task AddProductAsync(Product product);
        Task<Product> GetProductByIdAsync(int id);
        Task<List<Product>> GetProductsAsync();
        Task UpdateProductAsync(Product product);
        Task DeleteProductByIdAsync(int id);
    }
}
