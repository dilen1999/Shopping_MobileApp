using Microsoft.AspNetCore.Mvc;
using ShoppingAppMobile.Core.Application.Dtos;
using ShoppingAppMobile.Core.Application.Services;

namespace ShoppingAppMobile.Presentation.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _orderService;
        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public async Task<IActionResult> PlaceOrder([FromBody] OrderDTO orderDto)
        {
            if (orderDto == null)
                return BadRequest("Invalid order data");

            await _orderService.AddOrderAsync(orderDto);
            return Ok("Order placed successfully");
        }

        [HttpGet("{customerId}")]
        public async Task<IActionResult> GetOrdersByCustomerId(int customerId)
        {
            var orders = await _orderService.GetOrdersByCustomerIdAsync(customerId);
            return Ok(orders);
        }

        [HttpGet("details/{orderId}")]
        public async Task<IActionResult> GetOrderById(int orderId)
        {
            var order = await _orderService.GetOrderByIdAsync(orderId);
            if (order == null)
                return NotFound("Order not found");

            return Ok(order);
        }

        [HttpPut("{orderId}")]
        public async Task<IActionResult> UpdateOrderStatus(int orderId, [FromBody] OrderDTO orderDto)
        {
            var existingOrder = await _orderService.GetOrderByIdAsync(orderId);
            if (existingOrder == null)
                return NotFound("Order not found");

            orderDto.OrderId = orderId; // Ensure the correct order ID is used

            await _orderService.UpdateOrderAsync(orderDto);
            return Ok("Order status updated successfully");
        }


        [HttpDelete("{orderId}")]
        public async Task<IActionResult> CancelOrder(int orderId)
        {
            var order = await _orderService.GetOrderByIdAsync(orderId);
            if (order == null)
                return NotFound("Order not found");

            await _orderService.DeleteOrderAsync(orderId);
            return Ok("Order cancelled successfully");
        }
    }
}
