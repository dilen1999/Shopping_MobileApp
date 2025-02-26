using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Services;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly CartService _cartService;
        public CartController(CartService cartService)
        {
            _cartService = cartService;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddToCart([FromBody] CartDTO cartDto)
        {
            if (cartDto == null)
                return BadRequest("Invalid cart data");

            var cart = new Cart
            {
                CartId = cartDto.CartId,
                CustomerId = cartDto.CustomerId,
                ProductId = cartDto.ProductId,
                Quantity = cartDto.Quantity,
                IsDeleted = cartDto.IsDeleted
            };

            await _cartService.AddToCartAsync(cartDto);

            return Ok(cart);
        }


        [HttpGet("{customerId}")]
        public async Task<IActionResult> GetCartByCustomerId(int customerId)
        {
            var cart = await _cartService.GetCartByCustomerIdAsync(customerId);
            return Ok(cart);
        }

        [HttpPut("update/{cartId}")]
        public async Task<IActionResult> UpdateCartItem(int cartId, [FromBody] CartDTO cartDto)
        {
            if (cartDto == null)
                return BadRequest("Invalid cart data");

            var existingCart = await _cartService.GetCartItemByIdAsync(cartId);
            if (existingCart == null)
                return NotFound("Cart item not found");

            cartDto.CartId = cartId; // Ensure correct cartId is used
            await _cartService.UpdateCartItemAsync(cartDto);

            return Ok(cartDto);
        }



        [HttpDelete("remove/{cartId}")]
        public async Task<IActionResult> RemoveCartItem(int cartId)
        {
            var existingCartItem = await _cartService.GetCartItemByIdAsync(cartId);
            if (existingCartItem == null)
                return NotFound("Cart item not found");

            await _cartService.RemoveCartItemAsync(cartId);
            return Ok("Removed Cart Item");
        }

        [HttpDelete("clear/{customerId}")]
        public async Task<IActionResult> ClearCart(int customerId)
        {
            await _cartService.ClearCartAsync(customerId);
            return Ok("Cart item cleared");
        }
    }
}
