using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Review
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public int ReviewId { get; set; }

        [Required]
        [ForeignKey("Product")] 
        public int ProductId { get; set; }

        [Required]
        [ForeignKey("Customer")]
        public int CustomerId { get; set; }

        [Required]
        [Range(1, 5)] 
        public int Rating { get; set; }

        [MaxLength] 
        public string? Comments { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)] 
        public DateTime ReviewDate { get; set; } = DateTime.UtcNow; 

        [DefaultValue(false)] 
        public bool IsDeleted { get; set; } = false; 

    }
}