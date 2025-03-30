using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Services;
using ShoppingAppMobile.Core.Domain.Entities;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ShoppingAppMobile.Presentation.Controller
{
    //[Route("api/[controller]")]
    //[ApiController]
    //public class AuthController : ControllerBase
    //{
    //    private readonly AuthService _authService;
    //    public AuthController(AuthService authService)
    //    {
    //        _authService = authService;
    //    }
    //    ////public static Customer user = new();
    //    //[HttpPost("register")]
    //    //public async Task<ActionResult<Customer>> Register(UserDTO request)
    //    //{
    //    //   var user = await _authService.RegisterAsync(request);
    //    //    if (user == null)
    //    //    {
    //    //        return BadRequest("Email already exists");
    //    //    }
    //    //    return Ok(user);
    //    //}

    //    //[HttpPost("login")]
    //    //public async Task<ActionResult<string>> Login(UserDTO request)
    //    //{
    //    //    var token = await _authService.LoginAsync(request);
    //    //    if (token == null)
    //    //    {
    //    //        return BadRequest("Invalid email or password");
    //    //    }
    //    //    return Ok(token);
    //    //}

    //    [HttpPost("login")]
    //    public async Task<ActionResult<string>> Login(UserDTO request)
    //    {
    //        var token = await _authService.LoginAsync(request);
    //        if (token == null)
    //        {
    //            return BadRequest("Invalid email or password");
    //        }
    //        return Ok(token);
    //    }

    //    [HttpPost("register")]
    //    public async Task<ActionResult<Customer>> Register(UserDTO request)
    //    {
    //        var user = await _authService.RegisterAsync(request);
    //        if (user == null)
    //        {
    //            return BadRequest("Email already exists");
    //        }
    //        return Ok(user);
    //    }

    //    //private string  CreateToken(Customer user)
    //    //{
    //    //    var claims = new List<Claim>
    //    //    {
    //    //        new Claim(ClaimTypes.Name, user.Email )
    //    //    };

    //    //    var key = new SymmetricSecurityKey(
    //    //        Encoding.UTF8.GetBytes(configuration.GetValue<string>("AppSettings:Token")!));

    //    //    var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512);

    //    //    var tokenDescriptor = new JwtSecurityToken(
    //    //        issuer: configuration.GetValue<string>("Application:Issuer"),
    //    //        audience: configuration.GetValue<string>("Application:audience"),
    //    //        claims: claims,
    //    //        expires: DateTime.UtcNow.AddDays(1),
    //    //        signingCredentials: creds
    //    //        );

    //    //    return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
    //    //}
    //}
    // In ShoppingAppMobile.Presentation.Controller namespace
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            try
            {
                var customer = await _authService.RegisterAsync(request.Name, request.Email, request.Password);
                return Ok(new { Message = "Registration successful", Customer = customer });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                var customer = await _authService.LoginAsync(request.Email, request.Password);
                return Ok(new { Message = "Login successful", Customer = customer });
            }
            catch (Exception ex)
            {
                return Unauthorized(new { Message = ex.Message });
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            _authService.Logout();
            return Ok(new { Message = "Logged out successfully" });
        }

        [HttpGet("current")]
        public async Task<IActionResult> GetCurrentCustomer()
        {
            var customer = await _authService.GetCurrentCustomer();
            if (customer == null)
            {
                return Unauthorized(new { Message = "Not logged in" });
            }
            return Ok(customer);
        }
    }

    // Request models
    public class RegisterRequest
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }
    }

    public class LoginRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
