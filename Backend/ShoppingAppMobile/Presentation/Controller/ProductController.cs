using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Services;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            if (product == null)
                return BadRequest("Product data is required.");

            await _productService.AddProductAsync(product);
            return Ok("Product added successfully.");
        }
    }
}
