using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Notification
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int NotificationId { get; set; }

        [Required]
        [ForeignKey("Customer")] 
        public int CustomerId { get; set; }

        [ForeignKey("Order")] 
        public int? OrderId { get; set; }

        [Required]
        [MaxLength] 
        public string Message { get; set; }

        [Required]
        [MaxLength(10)] 
        [RegularExpression("^(Read|Unread)$", ErrorMessage = "Status must be 'Read' or 'Unread'.")]
        public string Status { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)] 
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false;

        // Navigation properties
        public virtual Customer Customer { get; set; }
        public virtual Order Order { get; set; }
    }
}