import "./dashboard.css";
import anime from "../Assets/clash.webp";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PhotoIcon from "@mui/icons-material/Photo";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { Button, Divider, TextField } from "@mui/material";

import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  createdStudent,
  deleteStudent,
  saveNewStudent,
  studentList,
  studentListShow,
} from "../Redux-toolkit/action";
import { useSelector } from "react-redux";
import {
  userData,
  studentDetails,
  allStudentList,
  createdStudentList,
} from "../Redux-toolkit/selectors";

import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const menuIcons = [
  DonutLargeIcon,
  PhotoIcon,
  RemoveRedEyeIcon,
  PersonIcon,
  AllInclusiveIcon,
  WhatshotIcon,
];
const menuArray = [
  "Student Details",
  "Attendance",
  "Grade",
  "Teacher assignment",
];

const Demodash = () => {
  const [currentUSer, setCurrentUser] = useState();
  const student = useSelector(userData);
  const studentDetail = useSelector(studentDetails);
  const [_id, setId] = useState(student?._id || "");
  const findStudentData = studentDetail?.find(
    (element) => element?.userId === _id
  );
console.log(studentDetail,67)
  //staff fetching data
  const loginedUser = useSelector(userData);
  const loginedUserId = loginedUser ? loginedUser._id : null;
  const loginedUserType = loginedUser ? loginedUser.userType : null;
  console.log(loginedUserId, currentUSer, loginedUser, loginedUserType, 125);

  const [input, setInput] = useState({
    studentId: "",
    studentName: "",
    dob: "",
    contactNumber: "",
    email: "",
    address: "",
    enrollmentDate: "",
    parentName: "",
    parentNumber: "",
  });
  const dispatch = useDispatch();
  setId(id);
  const [open, setOpen] = useState(false);
  // Function to open the dialog
  const handleClickOpen = (id) => {
    setOpen(true);
  };
  console.log( studentDetail, 1);

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveNewStudent({ input, callBack, _id }));
  };

  const callBack = (statusCode) => {
    console.log(statusCode, 90);
    if (statusCode === 200) {
      cb();
      handleClose();
    }
  };

  useEffect(() => {
    setInput(findStudentData);
  }, [studentDetails, currentUSer, _id]);
  console.log(findStudentData, input, 100);

  useEffect(() => {
    dispatch(studentList());
  }, []);
  console.log(showStudentList, 105);

  //it show all the created user

  const showStudentList = useSelector(allStudentList) || [];
  useEffect(() => {
    dispatch(studentListShow());
  }, []);

  //created student list from the db  it dispatch the particular stu data
  const handleClick = (_id) => {
    setCurrentUser(_id);
    dispatch(createdStudent({ _id: _id.id, loginedUserType }));
  };
  console.log(_id, loginedUserType, 126);

  const createdStu = useSelector(createdStudentList) || [];
  console.log(createdStu, 120);
  console.log(loginedUserType, 131);

  useEffect(() => {
    if (loginedUserType === "staff")
      dispatch(createdStudent({ _id: "", loginedUserType }));
  }, []);

  //delete student
  const handleDeleteStudent = (_id) => {
    dispatch(deleteStudent({ _id, cb }));
  };
  const cb = () => dispatch(createdStudent({ _id: "", loginedUserType })); //solve the error need to delete the data in ui y using the createdstudent get api

  //ATTENDACE MODULE FUNCTION
  const [radio, setRadio] = useState({
    firstName: "",
    gender: "",
  });

  const handleRadio = (e) => {
    const { value } = e.target;
    setRadio({ ...radio, gender: value });
  };

  return (
    <div>
      <div>
        <div className="d-flex align-items-center gap-2 bg-purple py-3 px-3">
          <img src={anime} width="50" height="50" className="rounded-circle" />
          <div className="pe-5">
            <div className="text-nowrap fs-1 text-light-shade">To Do BUDDY</div>
            <div className="text-nowrap fs-1 fw-600 text-white">
              School Management
            </div>
          </div>
        </div>
      </div>
      <Tab.Container id="left-tabs-example">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Student Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Attendance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Grade</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Student Assignment</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <div>content</div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  {loginedUserId === currentUSer?.id && (
                    <Button
                      onClick={handleClickOpen}
                      className="bg-dark"
                      variant="contained"
                      startIcon={<ControlPointIcon sx={{ fontWeight: 700 }} />}
                      sx={{ fontWeight: 700, padding: 1.5, fontSize: 12 }}
                    >
                      {findStudentData ? "Edit" : "Create"}
                    </Button>
                  )}

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Student Details Form</DialogTitle>
                    <DialogContent>
                      <TextField
                        label="Student ID"
                        fullWidth
                        margin="normal"
                        name="studentId"
                        value={input?.studentId}
                        onChange={handleChange}
                      />
                      {console.log(input?.studentName)}
                      <TextField
                        label="Student Name"
                        fullWidth
                        margin="normal"
                        name="studentName"
                        value={input?.studentName}
                        onChange={handleChange}
                      />
                      <TextField
                        label="DOB"
                        type="date"
                        fullWidth
                        margin="normal"
                        name="dob"
                        value={input?.dob}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Contact Number"
                        fullWidth
                        margin="normal"
                        name="contactNumber"
                        value={input?.contactNumber}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        name="email"
                        value={input?.email}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Address"
                        fullWidth
                        margin="normal"
                        name="address"
                        value={input?.address}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Enrollment Date"
                        type="date"
                        fullWidth
                        margin="normal"
                        value={input?.enrollmentDate}
                        name="enrollmentDate"
                        onChange={handleChange}
                      />
                      <TextField
                        label="Parent Name"
                        fullWidth
                        margin="normal"
                        name="parentName"
                        value={input?.parentName}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Parent Number"
                        fullWidth
                        margin="normal"
                        name="parentNumber"
                        value={input?.parentNumber}
                        onChange={handleChange}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="secondary">
                        Cancel
                      </Button>
                      <Button onClick={handleSubmit} color="primary">
                        Submit
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div className="d-flex p-4 gap-3 bg-light-secondary">
                  {loginedUserType === "student" && (
                    <Card className="px-4 py-3">
                      <TextField
                        id="standard-basic"
                        label="TEAM INVOLVED"
                        variant="standard"
                        sx={{
                          "& .MuiInputBase-input": {
                            fontSize: "12px",
                            fontWeight: 510,
                            color: "#B3B2B3",
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: "12px",
                            fontWeight: 510,
                            color: "#B3B2B3",
                          },
                          "& .MuiInput-underline:before": {
                            borderBottomWidth: "2px",
                            borderBottomColor: "#E8E8EA",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomWidth: "2px",
                            borderBottomColor: "#E8E8EA",
                          },
                        }}
                      />
                      <div className="pt-3">
                        {showStudentList.map((item, index) => {
                          const name = item.firstName;
                          const role = item.role;
                          const id = item._id;
                          return (
                            <div
                              className="d-flex align-items-center gap-3 py-1"
                              key={index}
                              onClick={() => handleClick({ id })}
                            >
                              <img
                                src={anime}
                                width="40"
                                height="40"
                                className="rounded-circle"
                              />
                              <div className="pe-5">
                                <div className="text-nowrap fs-1 fw-600 ">
                                  {name}
                                </div>
                                <div className="text-nowrap fs-1 text-grey">
                                  {role}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Card>
                  )}

                  <Card className="px-4 py-4 flex-grow-1">
                    <div className="fs-1 fw-600 text-grey mt-2">
                      PROJECT ACTIVITY
                    </div>
                    <Divider
                      flexItem
                      sx={{
                        fontWeight: 600,
                        padding: "2px",
                        borderBottom: "2px solid #989a9f",
                      }}
                    />

                    <table classN="table mt-2">
                      <tr style={{ fontSize: "15px" }}>
                        <th>STUDENT ID</th>
                        <th>STUDENT NAME</th>
                        <th>DATE OF BIRTH</th>
                        <th>PHONE NUMBER</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                        <th>ENROLL DATE</th>
                        <th>PARENTS NAME</th>
                        <th>PARENTS NUMBER</th>
                        {loginedUserType === "staff" && (
                        <th>Action</th>
                        )}
                      </tr>
                      {createdStu?.map((item, index) => {
                        return (
                          <tr key={index} style={{ fontSize: "15px" }}>
                            <td>{item?.studentId} </td>
                            <td>{item?.studentName} </td>
                            <td>{item?.dob} </td>
                            <td>{item?.contactNumber} </td>
                            <td>{item?.email} </td>
                            <td>{item?.address} </td>
                            <td>{item?.enrollmentDate} </td>
                            <td>{item?.parentName} </td>
                            <td>{item?.parentNumber} </td>
                            {loginedUserType === "staff" && (
                            <td>
                             
                                <button

                                onClick={() =>
                                  handleDeleteStudent(item?.userId)
                                }
                              >
                                DELETE
                              </button>
                            </td>
                            )}
                             {loginedUserType === "staff" && (
                            <td>
                              <button
                                onClick={() => handleClickOpen(item?.userId)}
                              >
                                EDIT
                              </button>
                          
                              
                            </td>
                              ) }
                          </tr>
                        );
                      })}
                    </table>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="pt-3">
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Attendance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loginedUserType === "staff" && (
                          <tr>
                            <td>
                              <Card className="px-4 py-3">
                                <TextField
                                  id="standard-basic"
                                  label="TEAM INVOLVED"
                                  variant="standard"
                                  sx={{
                                    "& .MuiInputBase-input": {
                                      fontSize: "12px",
                                      fontWeight: 510,
                                      color: "#B3B2B3",
                                    },
                                    "& .MuiInputLabel-root": {
                                      fontSize: "12px",
                                      fontWeight: 510,
                                      color: "#B3B2B3",
                                    },
                                    "& .MuiInput-underline:before": {
                                      borderBottomWidth: "2px",
                                      borderBottomColor: "#E8E8EA",
                                    },
                                    "& .MuiInput-underline:after": {
                                      borderBottomWidth: "2px",
                                      borderBottomColor: "#E8E8EA",
                                    },
                                  }}
                                />

                                <div className="pt-3">
                                  {showStudentList.map((item, index) => {
                                    const name = item.firstName;
                                    const role = item.role;
                                    const id = item._id;
                                    const gender = item.gender;
                                    return (
                                      <div
                                        className="d-flex align-items-center gap-3 py-1"
                                        key={index}
                                        onClick={() => handleClick({ id })}
                                      >
                                        <img
                                          src={anime}
                                          width="40"
                                          height="40"
                                          className="rounded-circle"
                                        />
                                        <div className="pe-5">
                                          <td>
                                            <div className="text-nowrap fs-1 fw-600 ">
                                              {name}
                                            </div>
                                          </td>
                                          <td>
                                            <div className="text-nowrap fs-1 text-grey">
                                              {role}
                                            </div>
                                          </td>
                                          <td>
                                            <div className="text-nowrap fs-1 text-grey">
                                              <input
                                                type="radio"
                                                id="html"
                                                name="fav_language"
                                                value="HTML"
                                                handleChange={handleRadio}
                                              />
                                                <label for="html">Present</label>  
                                              <input
                                                type="radio"
                                                id="css"
                                                name="fav_language"
                                                value="CSS"
                                                handleChange={handleRadio}
                                              />
                                                <label for="css">Absent</label>  
                                              <input
                                                type="radio"
                                                id="javascript"
                                                name="fav_language"
                                                value="JavaScript"
                                                handleChange={handleRadio}
                                              />
                                       
                                              <label for="javascript">
                                                 OD
                                              </label>
                                              {gender}
                                            </div>
                                          </td>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </Card>
                            </td>
                           
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">third tab content</Tab.Pane>
              <Tab.Pane eventKey="fourth">fourth tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Demodash;
