using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Services;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewController : ControllerBase
    {
        private readonly ReviewService _reviewService;
        public ReviewController(ReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        // Add a review
        [HttpPost]
        public async Task<IActionResult> AddReview([FromBody] Review review)
        {
            if (review == null)
                return BadRequest("Invalid review data");

            await _reviewService.AddReviewAsync(review);
            return Ok(review);
        }

        [HttpGet("{productId}")]
        public async Task<IActionResult> GetReviewsByProductId(int productId)
        {
            var reviews = await _reviewService.GetReviewsByProductIdAsync(productId);
            return Ok(reviews);
        }

        // Update a review
        [HttpPut("{reviewId}")]
        public async Task<IActionResult> UpdateReview(int reviewId, [FromBody] Review updatedReview)
        {
            var existingReview = await _reviewService.GetReviewByIdAsync(reviewId);
            if (existingReview == null)
                return NotFound("Review not found");

            existingReview.Rating = updatedReview.Rating;
            existingReview.Comments = updatedReview.Comments;

            await _reviewService.UpdateReviewAsync(existingReview);
            return Ok("Updated the review ");
        }

        // Delete a review
        [HttpDelete("{reviewId}")]
        public async Task<IActionResult> DeleteReview(int reviewId)
        {
            var existingReview = await _reviewService.GetReviewByIdAsync(reviewId);
            if (existingReview == null)
                return NotFound("Review not found");

            await _reviewService.DeleteReviewAsync(reviewId);
            return Ok("Delete the review");
        }
    }
}
