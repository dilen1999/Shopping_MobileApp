using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BCrypt.Net;
namespace
 ShoppingAppMobile.Core.Domain.Entities
{
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CustomerId { get; set; }
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }

        //public string _password;
        //public string Password 
        //{
        //    get => _password;
        //    set => _password =BCrypt.Net.BCrypt.HashPassword(value);
        //}
        public string ProfilePicture { get; set; }
        public string Role { get; set; }
        public int? PaymentId { get; set; }
        public int? AddressId { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}