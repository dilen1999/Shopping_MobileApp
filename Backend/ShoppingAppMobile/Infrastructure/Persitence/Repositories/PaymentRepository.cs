using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class PaymentRepository :IPaymentRepository
    {
        private readonly ApplicationDbContext _context;
        public PaymentRepository(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}
