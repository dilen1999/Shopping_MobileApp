using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Cart
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int CartId { get; set; }

        [Required]
        [ForeignKey("Customer")] 
        public int CustomerId { get; set; }

        [Required]
        [ForeignKey("Product")] 
        public int ProductId { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be greater than 0.")] 
        public int Quantity { get; set; }

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false; 

        // Navigation properties
        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
    }
}