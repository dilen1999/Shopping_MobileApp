using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _context;
        public OrderRepository(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}
