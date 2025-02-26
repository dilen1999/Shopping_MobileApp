using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class OrderService
    {
        private readonly IOrderRepository _orderRepository;
        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task AddOrderAsync(OrderDTO orderDto)
        {
            var order = new Order
            {
                CustomerId = orderDto.CustomerId,
                TotalAmount = orderDto.TotalAmount,
                OrderDate = DateTime.UtcNow,
                Status = "Pending"
            };

            await _orderRepository.AddOrderAsync(order);
        }

        public async Task<IEnumerable<OrderDTO>> GetOrdersByCustomerIdAsync(int customerId)
        {
            var orders = await _orderRepository.GetOrdersByCustomerIdAsync(customerId);

            return orders.Select(order => new OrderDTO
            {
                OrderId = order.OrderId,
                CustomerId = order.CustomerId,
                TotalAmount = order.TotalAmount,
                OrderDate = order.OrderDate,
                Status = order.Status
            }).ToList();
        }

        public async Task<OrderDTO?> GetOrderByIdAsync(int orderId)
        {
            var order = await _orderRepository.GetOrderByIdAsync(orderId);
            if (order == null) return null;

            return new OrderDTO
            {
                OrderId = order.OrderId,
                CustomerId = order.CustomerId,
                TotalAmount = order.TotalAmount,
                OrderDate = order.OrderDate,
                Status = order.Status
            };
        }

        public async Task UpdateOrderAsync(OrderDTO orderDto)
        {
            var order = await _orderRepository.GetOrderByIdAsync(orderDto.OrderId);
            if (order == null) return;

            order.Status = orderDto.Status;
            order.TotalAmount = orderDto.TotalAmount;
            order.OrderDate = orderDto.OrderDate;

            await _orderRepository.UpdateOrderAsync(order);
        }


        public async Task DeleteOrderAsync(int orderId)
        {
            await _orderRepository.DeleteOrderAsync(orderId);
        }
    }
}
