using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ShoppingAppMobile.Infrastructure.Persitence.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly ILogger<AuthRepository> _logger;
        public AuthRepository(ApplicationDbContext context, IConfiguration configuration, ILogger<AuthRepository> logger)
        {
            _context = context;
            _configuration = configuration;
            _logger = logger;
        }
        public async Task<string?> LoginAsync(UserDTO request)
        {
            var user = await _context.Customers.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user is null)
            {
                return null;
            }
            if (new PasswordHasher<Customer>().VerifyHashedPassword(user, user.Password, request.Password) == PasswordVerificationResult.Failed)
            {
                return null;
            }

            return CreateToken(user);
        }

        //public async Task<Customer?> RegisterAsync(UserDTO request)
        //{
        //    try
        //    {
        //        if(await _context.Customers.AnyAsync(c => c.Email == request.Email ))
        //        {
        //            return null;
        //        }

        //        //var user = new Customer();

        //        ////var hashedPassword = new PasswordHasher<Customer>()
        //        ////   .HashPassword(user, request.Password);

        //        //user.Email = request.Email;
        //        //user.Password = hashedPassword;
        //        var user = new Customer
        //        {
        //            Email = request.Email
        //        };

        //        user.Password = new PasswordHasher<Customer>().HashPassword(user, request.Password);
        //        _context.Customers.Add(user);
        //        await _context.SaveChangesAsync();

        //        return user;
        //    }
        //    catch (DbUpdateException ex)
        //    {
        //        _logger.LogError(ex, "An error occurred while registering the user.");
        //        return null;
        //    }
        //}
        public async Task<Customer?> RegisterAsync(UserDTO request)
        {
            try
            {
                _logger.LogInformation($"Checking if email {request.Email} already exists.");

                // Check if the email already exists
                bool emailExists = await _context.Customers.AnyAsync(c => c.Email == request.Email);
                _logger.LogInformation($"Email exists: {emailExists}");

                if (emailExists)
                {
                    _logger.LogWarning($"Email {request.Email} already exists.");
                    return null;
                }

                _logger.LogInformation($"Creating new user with email {request.Email}.");

                // Create a new Customer object
                var user = new Customer
                {
                    Email = request.Email,
                    Password = new PasswordHasher<Customer>().HashPassword(null, request.Password)
                };

                // Add the user to the database context
                _context.Customers.Add(user);

                // Save changes to the database
                await _context.SaveChangesAsync();

                _logger.LogInformation($"User with email {request.Email} registered successfully.");
                return user;
            }
            catch (DbUpdateException ex)
            {
                _logger.LogError(ex, "An error occurred while registering the user.");
                return null;
            }
        }

        private string CreateToken(Customer user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email )
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_configuration.GetValue<string>("AppSettings:Token")!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

            var tokenDescriptor = new JwtSecurityToken(
                issuer: _configuration.GetValue<string>("Application:Issuer"),
                audience: _configuration.GetValue<string>("Application:audience"),
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: creds
                );

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }
    }
}
