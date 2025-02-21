using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class OrderService
    {
        private readonly IOrderRepository _orderRepository;
        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
    }
}
