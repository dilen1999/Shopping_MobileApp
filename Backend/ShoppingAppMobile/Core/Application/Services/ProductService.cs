﻿using ShoppingAppMobile.Core.Application.Interfaces;
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
        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _productRepository.GetProductByIdAsync(id);
        }
        public async Task<List<Product>> GetProductsAsync()
        {
            return await _productRepository.GetProductsAsync();
        }
        public async Task UpdateProductAsync(Product product)
        {
            if(product == null)
                throw new ArgumentNullException(nameof(product));

            await  _productRepository.UpdateProductAsync(product);
        }
        public async Task DeleteProductByIdAsync(int id)
        {
            await _productRepository.DeleteProductByIdAsync(id);
        }
    }
}
