using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Interfaces
{
    public interface IcartRepository
    {
        Task AddToCartAsync(Cart cart);
        Task<IEnumerable<Cart>> GetCartByCustomerIdAsync(int customerId);
        Task<Cart?> GetCartItemByIdAsync(int cartId);
        Task UpdateCartItemAsync(Cart cart);
        Task RemoveCartItemAsync(int cartId);
        Task ClearCartAsync(int customerId);
    }
}
