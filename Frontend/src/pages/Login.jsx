import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import Axios from "../utils/axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const validateValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...SummaryApi.login,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        setData({
          email: "",
          password: "",
        });
        navigate("/");
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
            <h1 id="page-logo">LOGIN</h1>
          </div>
          <form onSubmit={handleSubmit} className="user-details">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
                <div
                  className="showpassword"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
              <div className="forgot-password">
                <Link
                  to={"/forgot-password"}
                  className="fpassword-link"
                  href="#"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              disabled={!validateValue}
              className={`btn btn-primary ${!validateValue ? "disabled" : ""}`}
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="register-link">
            Don't have account?{" "}
            <Link className="active-link" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
