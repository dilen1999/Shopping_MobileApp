using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Interfaces;
using ShoppingAppMobile.Core.Domain.Entities;

namespace ShoppingAppMobile.Core.Application.Services
{
    public class NotificationService
    {
        private readonly INotificationRepository _notificationRepository;
        public NotificationService (INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository; 
        }

        // ✅ Get notifications by customerId
        public async Task<IEnumerable<NotificationDTO>> GetNotificationsByCustomerIdAsync(int customerId)
        {
            var notifications = await _notificationRepository.GetNotificationsByCustomerIdAsync(customerId);

            return notifications.Select(n => new NotificationDTO
            {
                NotificationId = n.NotificationId,
                CustomerId = n.CustomerId,
                OrderId = n.OrderId,
                Message = n.Message,
                Status = n.Status,
                Timestamp = n.Timestamp,
                IsDeleted = n.IsDeleted
            }).ToList();
        }

        // ✅ Mark a notification as read
        public async Task<bool> MarkNotificationAsReadAsync(int notificationId)
        {
            var notification = await _notificationRepository.GetNotificationByIdAsync(notificationId);
            if (notification == null)
            {
                return false;
            }

            notification.Status = "Read";
            await _notificationRepository.UpdateNotificationAsync(notification);
            return true;
        }

        // ✅ Soft delete a notification
        public async Task<bool> DeleteNotificationAsync(int notificationId)
        {
            var notification = await _notificationRepository.GetNotificationByIdAsync(notificationId);
            if (notification == null)
            {
                return false;
            }

            notification.IsDeleted = true;
            await _notificationRepository.UpdateNotificationAsync(notification);
            return true;
        }
    }
}
