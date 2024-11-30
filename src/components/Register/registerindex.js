 import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerstyle.css";

function GridComplexExample() {
  const [role, setRole] = useState("student");
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    emailId: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    address: "",
  });
  console.log(typeof register);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleRadio=(e)=>{
    const{value}=e.target;
    setRegister({...register,gender:value})
  }
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...register, user: role };
      const res = await axios.post(
        `http://localhost:5000/management/${role}`,
        payload
      );
      alert("Registered successfully")
      navigate("/login");
    } catch (error) {
      console.log("registration failed", error);
      alert(error.message)
    }
  };
  return (
    <div  className="section">

    <Form onSubmit={handleSubmit} className="container">
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label >User</Form.Label>
        <Form.Select className="input"
          defaultValue="Student"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="staff">Staff</option>
          <option value="student">Student</option>
        </Form.Select>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="firstName"
            value={register.firstName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="lastName"
            value={register.lastName}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="userName"
            value={register.userName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your confirm password"
            name="confirmPassword"
            value={register.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="emailId"
            value={register.emailId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={register.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your DOB"
            name="dateOfBirth"
           
            value={register.dateOfBirth}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Gender</Form.Label>
          
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Male"
                name="gender"
                type= 'radio'
                id={`inline-radio`}
                value='male'
                onChange={handleRadio}
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type='radio'
                id={`inline-radio`}
                value='female'
                onChange={handleRadio }
              />
            </div>
         
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          type="text"
          name="address"
          value={register.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginLeft:'40%'}} className="btn1">
        Register
      </Button>
    </Form>
    </div>
  );
}

export default GridComplexExample;
