using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class CartRepository : IcartRepository
    {
        private readonly ApplicationDbContext _context;
        public CartRepository(ApplicationDbContext context) {
            _context = context; }
    }
}
