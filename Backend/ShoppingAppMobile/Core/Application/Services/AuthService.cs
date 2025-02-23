using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class AuthService
    {
        private readonly IAuthRepository _authRepository;
        public AuthService(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        public async Task<Customer> RegisterAsync(UserDTO request)
        {
            return await _authRepository.RegisterAsync(request);
        }

        public async Task<string> LoginAsync(UserDTO request)
        {
            return await _authRepository.LoginAsync(request);
        }
    }
}
