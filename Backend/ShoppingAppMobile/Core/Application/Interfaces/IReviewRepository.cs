using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Interfaces
{
    public interface IReviewRepository
    {
        Task AddReviewAsync(Review review);
        Task<IEnumerable<Review>> GetReviewsByProductIdAsync(int productId);
        Task<Review?> GetReviewByIdAsync(int reviewId);
        Task UpdateReviewAsync(Review review);
        Task DeleteReviewAsync(int reviewId);
    }
}
