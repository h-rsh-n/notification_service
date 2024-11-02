function bookingConfirmationTemplate(bookingData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">

      <!-- Header Section -->
      <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Your Flight is Booked!</h1>
        <p style="margin: 5px 0;">Booking Confirmation from Airline</p>
      </div>

      <!-- Content Section -->
      <div style="padding: 20px;">
        <p>Dear Customer,</p>
        <p>Thank you for booking with us! Your booking has been successfully confirmed. Here are the details of your flight booking:</p>
        
        <!-- Booking Details Table -->
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Booking ID</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.bookingId}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>User ID</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.userId}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total Cost</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.cost}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total Seats</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.totalSeats}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Status</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingData.status}</td>
          </tr>
        </table>

        <!-- Flight Details Section -->
        <div style="margin-top: 30px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background-color: #f3f3f3;">
          <h3 style="margin: 0; color: #333;">Flight Details</h3>
          <p style="margin: 5px 0;">Flight Number: <strong>${bookingData.flightId}</strong></p>
        </div>

        <!-- Support and Footer Section -->
        <p style="margin-top: 30px;">If you have any questions or need further assistance, please contact our support team at <a href="mailto:harshanp1523@gmail.com">support@airline.com</a>.</p>
        
        <p>Safe travels!<br>Your Airline Team</p>
      </div>

      <!-- Footer Section -->
      <div style="background-color: #f2f2f2; color: #777; padding: 10px; text-align: center; font-size: 12px;">
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>&copy; 2024 Your Airline Company. All rights reserved.</p>
      </div>

    </div>
  `;
}

module.exports = { bookingConfirmationTemplate };
