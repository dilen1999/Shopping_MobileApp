using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Interfaces
{
    public interface ICustomerRepository
    {
        Task AddCustomerAsync(Customer customer);
        Task<Customer> GetCustomerByIdAsync(int id);
        Task<List<Customer>> GetCustomersAsync();
        Task UpdateCustomerAsync(Customer customer);
        Task DeleteCustomerByIdAsync(int id);
    }
}
