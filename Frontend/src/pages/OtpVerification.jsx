import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function OtpVerification() {
  const [data, setData] = useState(["", "", "", "", "", ""]);

  const navigate = useNavigate();
  const inputRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    }
  }, []);

  const validateValue = data.every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...SummaryApi.forgotPasswordOtpVerification,
        data: {
          otp: data.join(""),
          email: location?.state?.email,
        },
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData(["", "", "", "", "", ""]);
        navigate("/reset-password", {
          state: {
            data: response.data,
            email: location?.state?.email,
          },
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
            <h1 id="page-logo">OTP Verification</h1>
          </div>
          <form onSubmit={handleSubmit} className="user-details">
            <div>
              <label htmlFor="otp">Enter Your OTP</label>
              <div className="otp-input">
                {data.map((element, index) => {
                  return (
                    <input
                      key={"otp" + index}
                      className="otp"
                      type="text"
                      id="otp"
                      ref={(ref) => {
                        inputRef.current[index] = ref;
                        return ref;
                      }}
                      value={data[index]}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newData = [...data];
                        newData[index] = value;
                        setData(newData);

                        if (value && index < 5) {
                          inputRef.current[index + 1].focus();
                        }
                      }}
                      maxLength={1}
                    />
                  );
                })}
              </div>
            </div>

            <button
              disabled={!validateValue}
              className={`btn btn-primary ${!validateValue ? "disabled" : ""}`}
              type="submit"
            >
              Verify Otp
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
