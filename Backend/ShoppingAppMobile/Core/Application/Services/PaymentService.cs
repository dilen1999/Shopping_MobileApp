using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class PaymentService
    {
        private readonly IPaymentRepository _paymentRepository;
        public PaymentService(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        public async Task AddPaymentAsync(PaymentDTO paymentDto)
        {
            var payment = new Payment
            {
                PaymentId = paymentDto.PaymentId,
                CustomerId = paymentDto.CustomerId,
                CardType = paymentDto.CardType,
                CardNumber = paymentDto.CardNumber,
                CVV = paymentDto.CVV,
                ExpiryDate = paymentDto.ExpiryDate
            };

            await _paymentRepository.AddPaymentAsync(payment);
        }

        public async Task<IEnumerable<PaymentDTO>> GetPaymentsByCustomerIdAsync(int customerId)
        {
            var payments = await _paymentRepository.GetPaymentsByCustomerIdAsync(customerId);
            return payments.Select(p => new PaymentDTO
            {
                PaymentId = p.PaymentId,
                CustomerId = p.CustomerId,
                CardType = p.CardType,
                CardNumber = p.CardNumber,
                CVV = p.CVV,
                ExpiryDate = p.ExpiryDate
            }).ToList();
        }

        public async Task<PaymentDTO?> GetPaymentByIdAsync(int paymentId)
        {
            var payment = await _paymentRepository.GetPaymentByIdAsync(paymentId);
            if (payment == null) return null;

            return new PaymentDTO
            {
                PaymentId = payment.PaymentId,
                CustomerId = payment.CustomerId,
                CardType = payment.CardType,
                CardNumber = payment.CardNumber,
                CVV = payment.CVV,
                ExpiryDate = payment.ExpiryDate
            };
        }
    }
}
