namespace ShoppingAppMobile.Core.Application.Dtos
{
    public class PaymentDTO
    {
        public int PaymentId { get; set; }
        public int CustomerId { get; set; }
        public string CardType { get; set; }
        public byte[] CardNumber { get; set; }
        public byte[] CVV { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
}
