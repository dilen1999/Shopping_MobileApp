using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int OrderId { get; set; }

        [Required]
        [ForeignKey("Customer")] 
        public int CustomerId { get; set; }

        [Required]
        [Column(TypeName = "decimal(10, 2)")] 
        public decimal TotalAmount { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)] 
        public DateTime OrderDate { get; set; } = DateTime.UtcNow; 

        [Required]
        [MaxLength(50)] // NVARCHAR(50)
        [RegularExpression("^(Pending|Completed|Cancelled)$", ErrorMessage = "Status must be 'Pending', 'Completed', or 'Cancelled'.")] // CHECK constraint
        public string Status { get; set; }

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false; 

        // Navigation property
        public virtual Customer Customer { get; set; }
    }
}