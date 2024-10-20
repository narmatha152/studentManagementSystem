import "./registerstyle.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload={...register,user:role}
      const res = await axios.post(
        `http://localhost:5000/management/${role}`,
        payload
        
      );
      navigate("/login");
    } catch (error) {
      console.log("registration failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>user</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="staff">Staff</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div>
        <label>Firstname</label>
        <input
          type="text"
          name="firstName"
          value={register.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>lastname</label>
        <input
          type="text"
          name="lastName"
          value={register.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>username</label>
        <input
          type="text"
          name="userName"
          value={register.userName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          name="password"
          value={register.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>conformPassword</label>
        <input
          type="password"
          name="confirmPassword"
          value={register.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email id</label>
        <input
          type="text"
          name="emailId"
          value={register.emailId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>phoneNumber</label>
        <input
          type="text"
          name="phoneNumber"
          value={register.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>date of birth</label>
        <input
          type="text"
          name="dateOfBirth"
          value={register.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={register.gender}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={register.address}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
