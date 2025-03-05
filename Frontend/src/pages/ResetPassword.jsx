import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Axios from "../utils/axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateValue = Object.values(data).every((el) => el);

  useEffect(() => {
    if (!location?.state?.data?.success) {
      navigate("/");
    }

    if (location?.state?.email) {
      setData((preve) => {
        return {
          ...preve,
          email: location?.state?.email,
        };
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...SummaryApi.resetPassword,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login", {
          state: data,
        });
        setData({
          email: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <div className="container">
      <section className="image">
        <img
          className="image-background"
          src="https://wallpaperaccess.com/full/2593044.jpg"
          alt="Appliances"
        />
      </section>

      <section className="login">
        <div className="login-box">
          <div className="logo-container">
            <h1 id="page-logo">Reset Password</h1>
          </div>
          <form onSubmit={handleSubmit} className="user-details">
            <div>
              <label htmlFor="newPassword">New Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  placeholder="Enter your New Password"
                  name="newPassword"
                  value={data.newPassword}
                  onChange={handleChange}
                />
                <div
                  className="showpassword"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Enter your Confirm Password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
                <div
                  className="showpassword"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>

            <button
              disabled={!validateValue}
              className={`btn btn-primary ${!validateValue ? "disabled" : ""}`}
              type="submit"
            >
              Change Password
            </button>
          </form>
          <p className="register-link">
            Already have account?{" "}
            <Link className="active-link" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
