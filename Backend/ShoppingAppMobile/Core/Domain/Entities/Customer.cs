using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // IDENTITY(1,1)
        public int CustomerId { get; set; }

        [Required]
        [MaxLength(255)] // NVARCHAR(255)
        public string Name { get; set; }

        [Required]
        [MaxLength(255)] // NVARCHAR(255)
        [EmailAddress] // Ensures valid email format
        public string Email { get; set; }

        [Required]
        [MaxLength(255)] // NVARCHAR(255)
        public string Password { get; set; }

        [MaxLength(255)] // NVARCHAR(255)
        public string ProfilePicture { get; set; }

        [Required]
        [MaxLength(50)] // NVARCHAR(50)
        [RegularExpression("^(Customer|Admin)$", ErrorMessage = "Role must be either 'Customer' or 'Admin'.")]
        public string Role { get; set; }

       
        public int? PaymentId { get; set; }

        public int? AddressId { get; set; }

        [DefaultValue(false)] // DEFAULT 0
        public bool IsDeleted { get; set; } = false; // Soft delete
    }
}