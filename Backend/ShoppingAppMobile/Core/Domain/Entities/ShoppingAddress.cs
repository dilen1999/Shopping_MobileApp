using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class ShoppingAddress
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int AddressId { get; set; }

        [Required]
        [ForeignKey("Customer")] 
        public int CustomerId { get; set; }

        [Required]
        [MaxLength(255)] 
        public string FullName { get; set; }

        [Required]
        [MaxLength(255)] 
        public string Address { get; set; }

        [Required]
        [MaxLength(100)] 
        public string City { get; set; }

        [MaxLength(100)] 
        public string State { get; set; }

        [MaxLength(100)] 
        public string Country { get; set; }

        [MaxLength(20)] 
        public string PostalCode { get; set; }

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false; 

        // Navigation property
        public virtual Customer Customer { get; set; }
    }
}