const verifyEmailTemplate = ({ name, url }) => {
  return `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
      
      <h2 style="color: #4CAF50; text-align: center;">Email Verification</h2>

      <p style="font-size: 16px; line-height: 1.5;">Dear <strong>${name}</strong>,</p>
      
      <p style="font-size: 16px; line-height: 1.5;">
        Thank you for registering with <strong>JAC O' Trades Ecommerce</strong>. To complete your registration, please verify your email address by clicking the button below:
      </p>

      <div style="text-align: center; margin-top: 20px;">
        <a href="${url}" style="
          background-color: #4CAF50; 
          color: #ffffff; 
          padding: 15px 30px; 
          font-size: 18px; 
          font-weight: bold; 
          text-decoration: none; 
          border-radius: 5px; 
          display: inline-block; 
          transition: background-color 0.3s ease;">
          Verify Email
        </a>
      </div>

      <p style="font-size: 16px; line-height: 1.5; margin-top: 20px;">
        If you didn't register for an account, please ignore this email.
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

export default verifyEmailTemplate;
