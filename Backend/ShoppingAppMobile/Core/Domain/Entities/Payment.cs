using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Payment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int PaymentId { get; set; }

        [Required]
        [ForeignKey("Customer")] // ForeignKey to the Customer entity
        public int CustomerId { get; set; }

        [MaxLength(50)] 
        public string? CardType { get; set; }

        [Required]
        [Column(TypeName = "varbinary(256)")] 
        public byte[] CardNumber { get; set; }

        [Required]
        [Column(TypeName = "varbinary(256)")] 
        public byte[] CVV { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime ExpiryDate { get; set; }

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false;
        public virtual Customer Customer { get; set; }
    }
}