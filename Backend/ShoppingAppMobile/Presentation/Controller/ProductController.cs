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

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);

            if (product == null)
                return NotFound("Product is not found.");
            return Ok(product);

        }

        [HttpGet("get")]
        public async Task<IActionResult> GetProducts()
        {
            var product = await _productService.GetProductsAsync();
            return Ok(product);
        }
    }
}
