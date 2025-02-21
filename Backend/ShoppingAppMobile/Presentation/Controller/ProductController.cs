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

        [HttpPut("update/{id}")]
        public async Task<IActionResult> Updateproduct(int id,[FromBody] Product product)
        {
            if (product == null)
                return BadRequest("Product data is required.");

            var existingProduct = await _productService.GetProductByIdAsync(id);
            if (existingProduct == null)
                return NotFound("Product not found");

            product.ProductId = id;

            await _productService.UpdateProductAsync(product);
            return Ok("Product Updated Successfully.");
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var existingproduct = await _productService.GetProductByIdAsync(id);
            if (existingproduct == null)
                return NotFound("Product Not Found");

            await _productService.DeleteProductByIdAsync(id);
            return Ok("Product deleted successfully");
        }
    }
}
