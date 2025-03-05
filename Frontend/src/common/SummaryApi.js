export const baseURL = import.meta.env.VITE_API_URL;

const SummaryApi = {
  register: {
    url: "/api/user/register",
    method: "post",
  },
  login: {
    url: "/api/user/login",
    method: "post",
  },
  forgotPassword: {
    url: "/api/user/forgot-password",
    method: "put",
  },
  forgotPasswordOtpVerification: {
    url: "api/user/verify-forgot-password-otp",
    method: "put",
  },
  resetPassword: {
    url: "api/user/reset-password",
    method: "put",
  },
  refreshToken: {
    url: "api/user/refresh-token",
    method: "post",
  },
};

export default SummaryApi;
