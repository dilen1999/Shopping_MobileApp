using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace ShoppingAppMobile.Core.Application.Dtos
{
    public class NotificationDTO
    {
        public int NotificationId { get; set; }
        public int CustomerId { get; set; }
        public int? OrderId { get; set; }
        public string Message { get; set; }
        public string Status { get; set; }
        public DateTime Timestamp { get; set; }
        public bool IsDeleted { get; set; }
    }
}
