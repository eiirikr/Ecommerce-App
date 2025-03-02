import { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [data, setData] = useState({
    email: "",
  });

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
        ...SummaryApi.forgotPassword,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/verification-otp", {
          state: data,
        });
        setData({
          email: "",
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
            <h1 id="page-logo">Forgot Password</h1>
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

            <button
              disabled={!validateValue}
              className={`btn btn-primary ${!validateValue ? "disabled" : ""}`}
              type="submit"
            >
              Send Otp
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
}
