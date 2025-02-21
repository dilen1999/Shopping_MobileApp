using ShoppingAppMobile.Core.Application.Interfaces;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class PaymentService
    {
        private readonly IPaymentRepository _paymentRepository;
        public PaymentService(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }
    }
}
