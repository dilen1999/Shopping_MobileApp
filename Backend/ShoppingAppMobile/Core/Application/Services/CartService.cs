using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class CartService
    {
        private readonly IcartRepository _cartRepository;
        public CartService(IcartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        public async Task AddToCartAsync(CartDTO cartDto)
        {
            var cart = new Cart
            {
                CartId = cartDto.CartId,
                CustomerId = cartDto.CustomerId,
                ProductId = cartDto.ProductId,
                Quantity = cartDto.Quantity,
                IsDeleted = cartDto.IsDeleted
            };

            await _cartRepository.AddToCartAsync(cart);
        }


        public async Task<IEnumerable<CartDTO>> GetCartByCustomerIdAsync(int customerId)
        {
            var carts = await _cartRepository.GetCartByCustomerIdAsync(customerId);

            return carts.Select(cart => new CartDTO
            {
                CartId = cart.CartId,
                CustomerId = cart.CustomerId,
                ProductId = cart.ProductId,
                Quantity = cart.Quantity,
                IsDeleted = cart.IsDeleted
            }).ToList();
        }

        public async Task<CartDTO?> GetCartItemByIdAsync(int cartId)
        {
            var cart = await _cartRepository.GetCartItemByIdAsync(cartId);
            if (cart == null) return null;

            return new CartDTO
            {
                CartId = cart.CartId,
                CustomerId = cart.CustomerId,
                ProductId = cart.ProductId,
                Quantity = cart.Quantity,
                IsDeleted = cart.IsDeleted
            };
        }

        public async Task UpdateCartItemAsync(CartDTO cartDto)
        {
            var existingCart = await _cartRepository.GetCartItemByIdAsync(cartDto.CartId);
            if (existingCart == null) return;

            // Map DTO values to the existing entity
            existingCart.Quantity = cartDto.Quantity;
            existingCart.IsDeleted = cartDto.IsDeleted;

            await _cartRepository.UpdateCartItemAsync(existingCart);
        }


        public async Task RemoveCartItemAsync(int cartId)
        {
            await _cartRepository.RemoveCartItemAsync(cartId);
        }

        public async Task ClearCartAsync(int customerId)
        {
            await _cartRepository.ClearCartAsync(customerId);
        }
    }
}
