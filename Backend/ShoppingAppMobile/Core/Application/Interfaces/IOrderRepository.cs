using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Interfaces
{
    public interface IOrderRepository
    {
        Task AddOrderAsync(Order order);
        Task<IEnumerable<Order>> GetOrdersByCustomerIdAsync(int customerId);
        Task<Order?> GetOrderByIdAsync(int orderId);
        Task UpdateOrderAsync(Order order);
        Task DeleteOrderAsync(int orderId);
    }
}
