using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Domain.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ShoppingAppMobile.Presentation.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IConfiguration configuration) : ControllerBase
    {
        public static Customer user = new();
        [HttpPost("register")]
        public ActionResult<Customer> Register(UserDTO request)
        {
            var hashedPassword = new PasswordHasher<Customer>()
                .HashPassword(user, request.Password);

            user.Email = request.Email;
            user.Password = hashedPassword;

            return Ok(user);
        }

        [HttpPost]
        public ActionResult<string> Login(UserDTO request)
        {
            if (user.Email != request.Email)
            {
                return BadRequest("User Not Found");
            }
            if(new PasswordHasher<Customer>().VerifyHashedPassword(user, user.Password, request.Password) == PasswordVerificationResult.Failed)
                    {
                return BadRequest("Wrong password");
            }

            string token = CreateToken(user);
            return Ok(token);
        }

        private string  CreateToken(Customer user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email )
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(configuration.GetValue<string>("AppSettings:Token")!));

            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512);

            var tokenDescriptor = new JwtSecurityToken(
                issuer: configuration.GetValue<string>("Application:Issuer"),
                audience: configuration.GetValue<string>("Application:audience"),
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: creds
                );

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }
    }
}
