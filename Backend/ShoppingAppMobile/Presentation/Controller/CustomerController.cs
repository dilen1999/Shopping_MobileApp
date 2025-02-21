using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Services;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerService _customerService;

        public CustomerController(CustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddCustomer([FromBody] Customer customer)
        {
            if (customer == null)
            {
                return BadRequest("Customer data is required");
            }
            await _customerService.AddCustomerAsync(customer);
            return Ok(customer);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetCustomerAsync(int id)
        {
            var customer =  await _customerService.GetCustomerByIdAsync(id);
            if (customer == null)
                return BadRequest("Customer is not found");

            return Ok(customer);
        }

        [HttpGet("get")]
        public async Task<IActionResult> GetCustomersAsync()
        {
            var customer = await _customerService.GetCustomersAsync();
            return Ok(customer);
        }

        [HttpPut("Update/{id}")]
        public async Task<IActionResult> UpdateCustomer(int id, [FromBody] Customer customer)
        {
            if(customer == null)
                return BadRequest("Customer data is required");

            var existingCustomer = await _customerService.GetCustomerByIdAsync(id);
            if(existingCustomer == null)
                return NotFound("Product Not Found");

            customer.CustomerId = id;

            await _customerService.UpdateCustomerAsync(customer);
            return Ok(customer);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var exisitingcoustomer = await _customerService.GetCustomerByIdAsync(id);
            if(exisitingcoustomer == null)
            {
                return BadRequest("Coustomer Not Found");
            }
            await _customerService.DeleteCustomerByIdAsync(id);
            return Ok("Customer deleted successfully");
        }
    }
}
