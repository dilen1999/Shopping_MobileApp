using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class CustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public async Task AddCustomerAsync(Customer customer)
        {
            if (customer == null) throw new ArgumentNullException(nameof(customer));
            await _customerRepository.AddCustomerAsync(customer);
        }

        public async Task<Customer> GetCustomerByIdAsync(int id)
        {
            return await _customerRepository.GetCustomerByIdAsync(id);
        }
        public async Task<List<Customer>> GetCustomersAsync()
        {
            return await _customerRepository.GetCustomersAsync();
        }
        public async Task UpdateCustomerAsync(Customer customer)
        {
            if(customer == null) throw new ArgumentNullException( nameof(customer));
            await _customerRepository.UpdateCustomerAsync(customer);
        }
    }
}
