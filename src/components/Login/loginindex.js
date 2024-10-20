import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/management/login", input)
      .then((res) => {
        if (res.data) {
          setInput({ userName: "", password: "" });
          if(res.status===200){
            navigate("/dashboard");
          }

        
        }
        
      }).catch((error)=>{
        console.log('error',error);
        
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Username
          </Form.Label>
          <Col sm={4}>
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
          <Col sm={4}>
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
            <Button type="submit">Log In</Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <span>If you are a new user...</span>
            <a href="/register">Create Account?</a>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
export default Login;
