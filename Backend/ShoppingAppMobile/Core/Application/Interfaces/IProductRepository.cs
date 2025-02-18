﻿using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Interfaces
{
    public interface IProductRepository
    {
        Task AddProductAsync(Product product);
    }
}
