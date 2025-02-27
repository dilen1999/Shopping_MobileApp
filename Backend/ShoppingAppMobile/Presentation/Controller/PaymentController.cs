using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Services;
using System.Threading.Tasks;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : ControllerBase
    {
        private readonly PaymentService _paymentService;
        public PaymentController(PaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpPost]
        public async Task<IActionResult> MakePayment([FromBody] PaymentDTO paymentDto)
        {
            if (paymentDto == null)
                return BadRequest("Invalid payment data");

            await _paymentService.AddPaymentAsync(paymentDto);
            return Ok("Payment successful");
        }

        [HttpGet("{customerId}")]
        public async Task<IActionResult> GetPaymentsByCustomerId(int customerId)
        {
            var payments = await _paymentService.GetPaymentsByCustomerIdAsync(customerId);
            return Ok(payments);
        }

        [HttpGet("details/{paymentId}")]
        public async Task<IActionResult> GetPaymentDetails(int paymentId)
        {
            var payment = await _paymentService.GetPaymentByIdAsync(paymentId);
            if (payment == null)
                return NotFound("Payment not found");

            return Ok(payment);
        }
    }
}
