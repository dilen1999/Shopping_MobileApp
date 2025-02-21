using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class CartService
    {
        private readonly IcartRepository _cartRepository;
        public CartService(IcartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }
    }
}
