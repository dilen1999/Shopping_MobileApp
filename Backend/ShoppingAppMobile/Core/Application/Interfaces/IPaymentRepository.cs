using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Interfaces
{
    public interface IPaymentRepository
    {
        Task AddPaymentAsync(Payment payment);
        Task<IEnumerable<Payment>> GetPaymentsByCustomerIdAsync(int customerId);
        Task<Payment?> GetPaymentByIdAsync(int paymentId);
    }
}
