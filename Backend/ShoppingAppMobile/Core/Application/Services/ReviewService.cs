using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class ReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        public ReviewService (IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }
    }
}
