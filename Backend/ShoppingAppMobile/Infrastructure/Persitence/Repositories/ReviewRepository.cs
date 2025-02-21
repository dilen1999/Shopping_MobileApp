using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly ApplicationDbContext _context;
        public ReviewRepository(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}
