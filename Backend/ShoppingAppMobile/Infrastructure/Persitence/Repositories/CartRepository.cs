using Microsoft.EntityFrameworkCore;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class CartRepository : IcartRepository
    {
        private readonly ApplicationDbContext _context;
        public CartRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddToCartAsync(Cart cart)
        {
            await _context.Carts.AddAsync(cart);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Cart>> GetCartByCustomerIdAsync(int customerId)
        {
            return await _context.Carts
                .Where(c => c.CustomerId == customerId && !c.IsDeleted)
                .ToListAsync();
        }

        public async Task<Cart?> GetCartItemByIdAsync(int cartId)
        {
            return await _context.Carts.FirstOrDefaultAsync(c => c.CartId == cartId && !c.IsDeleted);
        }

        public async Task UpdateCartItemAsync(Cart cart)
        {
            _context.Carts.Update(cart);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveCartItemAsync(int cartId)
        {
            var cartItem = await _context.Carts.FindAsync(cartId);
            if (cartItem != null)
            {
                cartItem.IsDeleted = true;
                await _context.SaveChangesAsync();
            }
        }

        public async Task ClearCartAsync(int customerId)
        {
            var cartItems = await _context.Carts.Where(c => c.CustomerId == customerId).ToListAsync();
            if (cartItems.Any())
            {
                foreach (var item in cartItems)
                {
                    item.IsDeleted = true;
                }
                await _context.SaveChangesAsync();
            }
        }
    }
}
