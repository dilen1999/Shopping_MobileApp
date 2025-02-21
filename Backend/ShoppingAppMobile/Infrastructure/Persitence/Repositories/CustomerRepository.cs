using Microsoft.EntityFrameworkCore;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ApplicationDbContext _context;
        public CustomerRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddCustomerAsync(Customer customer)
        {
            if (await _context.Customers.AnyAsync(c => c.Email == customer.Email))
            {
                throw new Exception("A customer with this email already exists.");
            }
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();
        }

        public async Task<Customer> GetCustomerByIdAsync(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer != null && !customer.IsDeleted)
            {
                return customer;
            }
            return null;
        }

        public async Task<List<Customer>> GetCustomersAsync()
        {
            return await _context.Customers.Where(p => !p.IsDeleted).ToListAsync();
        }

        public async Task UpdateCustomerAsync(Customer customer)
        {
            var existingCustomer = await _context.Customers.FindAsync(customer.CustomerId);
            if (existingCustomer != null)
            {
                existingCustomer.Email = customer.Email;
                existingCustomer.ProfilePicture = customer.ProfilePicture;
                existingCustomer.AddressId = customer.AddressId;
                existingCustomer.Name = customer.Name;
                existingCustomer.Role = customer.Role;
                existingCustomer.Password = customer.Password;
                existingCustomer.PaymentId = customer.PaymentId;
                existingCustomer.IsDeleted = customer.IsDeleted;

                _context.Customers.Update(existingCustomer);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new ArgumentException("Customer not found");
            }
        }

        public async Task DeleteCustomerByIdAsync(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if(customer != null)
            {
                customer.IsDeleted = true;
                _context.Customers.Update(customer);
                await _context.SaveChangesAsync();
            }
        }
    }
}
