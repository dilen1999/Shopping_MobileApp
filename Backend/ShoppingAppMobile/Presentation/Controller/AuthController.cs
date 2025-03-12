using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Services;
using ShoppingAppMobile.Core.Domain.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ShoppingAppMobile.Presentation.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        public AuthController(AuthService authService)
        {
            _authService = authService;
        }
        ////public static Customer user = new();
        //[HttpPost("register")]
        //public async Task<ActionResult<Customer>> Register(UserDTO request)
        //{
        //   var user = await _authService.RegisterAsync(request);
        //    if (user == null)
        //    {
        //        return BadRequest("Email already exists");
        //    }
        //    return Ok(user);
        //}

        //[HttpPost("login")]
        //public async Task<ActionResult<string>> Login(UserDTO request)
        //{
        //    var token = await _authService.LoginAsync(request);
        //    if (token == null)
        //    {
        //        return BadRequest("Invalid email or password");
        //    }
        //    return Ok(token);
        //}

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserDTO request)
        {
            var token = await _authService.LoginAsync(request);
            if (token == null)
            {
                return BadRequest("Invalid email or password");
            }
            return Ok(token);
        }

        [HttpPost("register")]
        public async Task<ActionResult<Customer>> Register(UserDTO request)
        {
            var user = await _authService.RegisterAsync(request);
            if (user == null)
            {
                return BadRequest("Email already exists");
            }
            return Ok(user);
        }

        //private string  CreateToken(Customer user)
        //{
        //    var claims = new List<Claim>
        //    {
        //        new Claim(ClaimTypes.Name, user.Email )
        //    };

        //    var key = new SymmetricSecurityKey(
        //        Encoding.UTF8.GetBytes(configuration.GetValue<string>("AppSettings:Token")!));

        //    var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512);

        //    var tokenDescriptor = new JwtSecurityToken(
        //        issuer: configuration.GetValue<string>("Application:Issuer"),
        //        audience: configuration.GetValue<string>("Application:audience"),
        //        claims: claims,
        //        expires: DateTime.UtcNow.AddDays(1),
        //        signingCredentials: creds
        //        );

        //    return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        //}
    }
}
