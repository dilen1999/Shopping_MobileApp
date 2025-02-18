using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class OrderDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int OrderDetailsId { get; set; }

        [Required]
        [ForeignKey("Order")] 
        public int OrderId { get; set; }

        [Required]
        [ForeignKey("Product")] 
        public int ProductId { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be greater than 0.")] 
        public int Quantity { get; set; }

        [Required]
        [Column(TypeName = "decimal(10, 2)")] 
        public decimal Price { get; set; }

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false; 

        // Navigation properties
        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}