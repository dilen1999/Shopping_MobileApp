using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Services;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/notifications")]
    public class NotificationController : ControllerBase
    {
        private readonly NotificationService _notificationService;
        public NotificationController(NotificationService notificationService)
        {
            _notificationService = notificationService;
        }

        [HttpGet("{customerId}")]
        public async Task<IActionResult> GetNotificationsByCustomerId(int customerId)
        {
            var notifications = await _notificationService.GetNotificationsByCustomerIdAsync(customerId);
            if (notifications == null || !notifications.Any())
            {
                return NotFound("No notifications found for this customer.");
            }
            return Ok(notifications);
        }

        [HttpPut("{notificationId}")]
        public async Task<IActionResult> MarkNotificationAsRead(int notificationId)
        {
            var result = await _notificationService.MarkNotificationAsReadAsync(notificationId);
            if (!result)
            {
                return NotFound("Notification not found.");
            }
            return Ok("Notification marked as read.");
        }

        [HttpDelete("{notificationId}")]
        public async Task<IActionResult> DeleteNotification(int notificationId)
        {
            var result = await _notificationService.DeleteNotificationAsync(notificationId);
            if (!result)
            {
                return NotFound("Notification not found.");
            }
            return Ok("Notification deleted successfully.");
        }
    }
}
