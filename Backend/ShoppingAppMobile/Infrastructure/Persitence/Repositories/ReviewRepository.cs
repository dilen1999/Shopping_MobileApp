using Microsoft.EntityFrameworkCore;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly ApplicationDbContext _context;
        public ReviewRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddReviewAsync(Review review)
        {
            await _context.Reviews.AddAsync(review);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Review>> GetReviewsByProductIdAsync(int productId)
        {
            return await _context.Reviews.Where(r => r.ProductId == productId && !r.IsDeleted).ToListAsync();
        }

        public async Task<Review?> GetReviewByIdAsync(int reviewId)
        {
            return await _context.Reviews.FirstOrDefaultAsync(r => r.ReviewId == reviewId && !r.IsDeleted);
        }

        public async Task UpdateReviewAsync(Review review)
        {
            _context.Reviews.Update(review);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteReviewAsync(int reviewId)
        {
            var review = await _context.Reviews.FindAsync(reviewId);
            if (review != null)
            {
                review.IsDeleted = true;
                await _context.SaveChangesAsync();
            }
        }
    }
}
