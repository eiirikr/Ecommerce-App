const forgotPasswordTemplate = ({ name, otp }) => {
  return `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
      
      <h2 style="color: #4CAF50; text-align: center;">Password Reset Request</h2>

      <p style="font-size: 16px; line-height: 1.5;">Dear <strong>${name}</strong>,</p>
      
      <p style="font-size: 16px; line-height: 1.5;">
        We received a request to reset your password. Please use the OTP code below to proceed with resetting your password on the <strong>JAC O' Trades Ecommerce</strong> website:
      </p>

      <div style="background-color: #f1c40f; font-size: 24px; text-align: center; padding: 15px; margin: 20px 0; border-radius: 6px; font-weight: bold; color: #fff;">
        ${otp}
      </div>

      <p style="font-size: 16px; line-height: 1.5;">
        This OTP is valid for 1 hour only. If you did not request a password reset, please ignore this email.
      </p>

      <p style="font-size: 16px; line-height: 1.5;">
        If you have any questions, feel free to reach out to our support team.
      </p>

      <br/>

      <p style="text-align: center; font-size: 16px; line-height: 1.5; color: #555;">
        Thanks,<br />
        <strong>JAC O' Trades Ecommerce</strong><br />
        <a href="mailto:jacotradesdevs@gmail.com" style="color: #4CAF50; text-decoration: none;">jacotradesdevs@gmail.com</a>
      </p>

    </div>
  </div>
  `;
};

export default forgotPasswordTemplate;
