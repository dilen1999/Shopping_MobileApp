using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Services;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/[controller")]
    public class PaymentController : ControllerBase
    {
        private readonly PaymentService _paymentService;
        public PaymentController(PaymentService paymentService)
        {
            _paymentService = paymentService;
        }   
    }
}
