using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class AuthService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AuthService(ICustomerRepository customerRepository, IHttpContextAccessor httpContextAccessor)
        {
            _customerRepository = customerRepository;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<Customer> RegisterAsync(string name, string email, string password)
        {
            var existingCustomer = (await _customerRepository.GetCustomersAsync())
                .FirstOrDefault(c => c.Email.Equals(email, StringComparison.OrdinalIgnoreCase));

            if (existingCustomer == null)
            {
                throw new Exception("Email already in use.");
            }

            var newCustomer = new Customer
            {
                Name = name,
                Email = email,
                Password = password,
                Role = "Customer"
            };

            await _customerRepository.AddCustomerAsync(newCustomer);
            return newCustomer;
        }

        public async Task<Customer> LoginAsync(string email, string password)
        {
            var customer = (await _customerRepository.GetCustomersAsync())
                .FirstOrDefault(c => c.Email.Equals(email, StringComparison.OrdinalIgnoreCase));

            if (customer == null || !customer.VerifyPassword(password)) 
            {
                throw new Exception("Invalid email or password");
            }
            if (customer.IsDeleted) {
                throw new Exception("Account has been deleted");
            }

            _httpContextAccessor.HttpContext.Session.SetInt32("CustomerId", customer.CustomerId);
            return customer;


        }

        public void Logout()
        {
            _httpContextAccessor.HttpContext.Session.Remove("CustomerId");
        }

        public async Task<Customer> GetCurrentCustomer()
        {
            var customerId = _httpContextAccessor.HttpContext.Session.GetInt32("CustomerId");
            if (customerId == null) return null;

            return await _customerRepository.GetCustomerByIdAsync(customerId.Value);
        }


        //private readonly IAuthRepository _authRepository;
        //public AuthService(IAuthRepository authRepository)
        //{
        //    _authRepository = authRepository;
        //}

        ////public async Task<Customer> RegisterAsync(UserDTO request)
        ////{
        ////    return await _authRepository.RegisterAsync(request);
        ////}

        ////public async Task<string> LoginAsync(UserDTO request)
        ////{
        ////    return await _authRepository.LoginAsync(request);
        ////}
        //public async Task<Customer> RegisterAsync(UserDTO request)
        //{
        //    return await _authRepository.RegisterAsync(request);
        //}

        //public async Task<string> LoginAsync(UserDTO request)
        //{
        //    return await _authRepository.LoginAsync(request);
        //}


    }
}
