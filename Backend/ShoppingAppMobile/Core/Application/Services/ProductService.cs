using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class ProductService
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task AddProductAsync(Product product)
        {
            if (product == null)
                throw new ArgumentNullException(nameof(product));

            await _productRepository.AddProductAsync(product);
        }
    }
}
