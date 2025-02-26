using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class ReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        public ReviewService (IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }
        public async Task AddReviewAsync(Review review)
        {
            await _reviewRepository.AddReviewAsync(review);
        }

        public async Task<IEnumerable<Review>> GetReviewsByProductIdAsync(int productId)
        {
            return await _reviewRepository.GetReviewsByProductIdAsync(productId);
        }
        public async Task<Review?> GetReviewByIdAsync(int reviewId)
        {
            return await _reviewRepository.GetReviewByIdAsync(reviewId);
        }

        public async Task UpdateReviewAsync(Review review)
        {
            await _reviewRepository.UpdateReviewAsync(review);
        }

        public async Task DeleteReviewAsync(int reviewId)
        {
            await _reviewRepository.DeleteReviewAsync(reviewId);
        }
    }
}
