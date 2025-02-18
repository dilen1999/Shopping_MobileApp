using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ShoppingAppMobile.Core.Domain.Entities
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [JsonIgnore]
        public int ProductId { get; set; }

        //[Required]
        //[MaxLength(255)] 
        //public string Name { get; set; }

        //[Required]
        //[Column(TypeName = "decimal(10, 2)")] 
        //public decimal Price { get; set; }

        //[MaxLength] 
        //public string? Description { get; set; }

        //[MaxLength(255)] 
        //public string? Image { get; set; }

        //[DefaultValue(0.0)] 
        //public float Rating { get; set; } = 0.0f;

        //[ForeignKey("AddedBy")] 
        //public int? AddedBy { get; set; } 

        //[DefaultValue(false)] 
        //public bool IsDeleted { get; set; } = false; 

        //// Navigation property for the Admin who added the product
        //public virtual Admin Admin { get; set; }

        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public float Rating { get; set; }
        public int? AddedBy { get; set; } // AdminId who added the product
        public bool IsDeleted { get; set; }
    }
}