import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../Redux-toolkit/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userData } from "../Redux-toolkit/selectors";
import schoolLogo from "../Assets/schoolLogo-removebg-preview.png";
import bg from "../Assets/home-bg.jpg";
import "./loginstyle.css";

const Login = () => {
  const userList = useSelector(userData);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const callBack = (statusCode) => {
    if (statusCode === 200) {
      navigate("/demo");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveLogin({
        userName: input.userName,
        password: input.password,
        callBack,
      })
    );
    console.log(userList, 33);
  };
  return (
    <div className="section1">
      <h1 style={{textAlign:"center"}}>Login Page</h1>
      <Row>
        <Col sm={4}>
          <img src={bg} alt="scl" className="logo" />
        </Col>
        <Col>
          <Row>
            <img src={schoolLogo} alt="logo" className="logo1" />
            <div className="logo_content">
              <h3>Admin</h3>
              Hard Work Conquers All
            </div>
          </Row>
          <Form onSubmit={handleSubmit} className="login">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Enter Your username"
                  name="userName"
                  value={input.userName}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" style={{width:"110px"}}>Log In</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 0.7 }}>
                <span>If you are a new user...</span>
                <a href="/register">Create Account?</a>
              </Col>
              <hr className="hr"></hr>
              <div>
              <p className="footer">
            
                @2024 All Right Reserved by XXXX School Management(Autonomous)
              </p>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
