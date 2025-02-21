using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Services;

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
    }
}
