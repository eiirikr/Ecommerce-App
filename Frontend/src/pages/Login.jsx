import { useState, useEffect, useContext } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Notyf } from "notyf";

import UserContext from "../context/UserContext";

export default function Login() {
  const notyf = new Notyf();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const { setUser } = useContext(UserContext);

  function authenticate(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          localStorage.setItem("token", data.access);
          retrieveUserDetails(data.access);
          setEmail("");
          setPassword("");
          notyf.success("Successful Login");
          navigate("/");
        } else {
          notyf.error("Email and Password do not match");
        }
      });
  }

  function retrieveUserDetails(token) {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/details`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ id: data._id, isAdmin: data.isAdmin });
      });
  }

  useEffect(() => {
    setIsActive(email !== "" && password !== "");
  }, [email, password]);

  return (
    <Container>
      <Row className="container">
        <Col className="image">
          <img
            src="https://wallpaperaccess.com/full/2593044.jpg"
            alt="Login Background"
            className="image-background"
          />
        </Col>
        <Col className="login">
          <Card className="login-box">
            <div className="logo-container">
              <h1 id="page-logo">LOGIN</h1>
            </div>
            <Form className="user-details" onSubmit={authenticate}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <div className="forgot-password">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <Button className="btn btn-primary" type="submit" variant="primary" disabled={!isActive}>
                Log In
              </Button>
            </Form>
            <Card.Footer>
              <p className="register-link">
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
