import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Notyf } from "notyf";

export default function Register() {
  const notyf = new Notyf();
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      userName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [userName, email, password, confirmPassword]);

  function registerUser(e) {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Registered successfully") {
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          notyf.success("Registered Successfully");

          navigate("/login");
        } else {
          notyf.error(data.error || "Please check your registration details");
        }
      });
  }

  return (
    <div className="container">
      <section className="image">
        <img className="image-background" src="https://wallpaperaccess.com/full/2593044.jpg" alt="Appliances" />
      </section>

      <section className="login">
        <div className="login-box">
          <div className="logo-container">
            <h1 id="page-logo">REGISTER</h1>
          </div>
          <Form onSubmit={registerUser} className="user-details">
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your Username" value={userName} onChange={(e) => setUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </Form.Group>
            <Button type="submit" className="btn btn-primary" disabled={!isActive}>Register</Button>
          </Form>
          <p className="register-link">Have an account? <a href="/login">Login</a></p>
        </div>
      </section>
    </div> 
  );
}