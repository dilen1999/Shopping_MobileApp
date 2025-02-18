using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Admin
    {
        [Key]
        [ForeignKey("Customer")] 
        public int AdminId { get; set; }

        [Required]
        [MaxLength(255)] 
        public string Name { get; set; }

        [Required]
        [MaxLength(255)] 
        [EmailAddress] 
        public string Email { get; set; }

        [Required]
        [MaxLength(255)] 
        public string Password { get; set; }

        [MaxLength(255)] 
        public string ProfilePicture { get; set; }

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false; 

        public virtual Customer Customer { get; set; }
    }
}