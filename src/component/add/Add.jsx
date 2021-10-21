import React, { Component } from "react";
import Header from "../header/Header";
import "./Add.css";
import {
  Button,
  FormLabel,
  TextareaAutosize,
  Slider,
  TextField,
  Checkbox,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function textValue(value) {
  return `${value}`;
}
export default class add extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      profilePic: "",
      gender: "",
      department: [],
      salary: "",
      startDate: new Date(),
      note: "",
    };
    this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeFullNameHandler = (event) => {
    this.setState({ fullName: event.target.value });
  };
  changeProfilePicHandler = (event) => {
    this.setState({ profilePic: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeDepartmentHandler = (event) => {
    var dept = event.target.value;
    this.setState((lastState) => ({
      department: [...lastState.department, dept],
    }));
  };
  changeSalaryHandler = (event) => {
    // this.setState({ salary: event.target.value });
    // console.log(event.target.value);
    this.setState({ salary: event.target.value });
    console.log(event.target.value);
  };
  changeStartDateHandler = (event) => {
    this.setState({ startDate: event });
  };
  changeNoteHandler = (event) => {
    this.setState({ note: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    const employee = {
      fullName: this.state.fullName,
      profilePic: this.state.profilePic,
      gender: this.state.gender,
      department: this.state.department,
      salary: this.state.salary,
      startDate: this.state.startDate,
      note: this.state.note,
    };
    console.log(employee);
    // console.log("textValue: "+textValue.value);
  };

  departments = [
    { name: "Sales", value: "Sales" },
    { name: "HR", value: "HR" },
    { name: "Engineer", value: "Engineer" },
    { name: "Finance", value: "Finance" },
    { name: "Other", value: "Other" },
  ];
  render() {
    return (
      <div>
        <Header></Header>
        <div className="form-content">
          <form className="form" onSubmit={this.handleSubmit}>
            {/* Input Name */}
            <div className="form-head">Employee Payroll form </div>
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Full Name
              </FormLabel>
              <TextField
                fullWidth
                label="Full Name"
                value={this.state.fullName}
                onChange={this.changeFullNameHandler}
                variant="outlined"
              />
            </div>

            {/* Imput ProfileImage */}
            <div className="row-content">
              {/* <RadioGroup row> */}
              <FormLabel component="legend" className="label text">
                Profile Image
              </FormLabel>
              <div className="profile-radio-content">
                <RadioGroup
                  row
                  aria-label="profile"
                  value={this.state.profilePic}
                  onChange={this.changeProfilePicHandler}
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    name="profile"
                    control={<Radio />}
                    value="../assets/Ellipse4.png"
                    label={
                      <img
                        className="profile"
                        id="image1"
                        src="../assets/Ellipse4.png"
                        alt=""
                      />
                    }
                  />
                  <FormControlLabel
                    name="profile"
                    control={<Radio />}
                    value="../assets/Ellipse7.png"
                    label={
                      <img
                        className="profile"
                        id="image2"
                        src="../assets/Ellipse7.png"
                        alt=""
                      />
                    }
                  />
                  <FormControlLabel
                    name="profile"
                    control={<Radio />}
                    value="../assets/Ellipse8.png"
                    label={
                      <img
                        className="profile"
                        id="image3"
                        src="../assets/Ellipse8.png"
                        alt=""
                      />
                    }
                  />
                  <FormControlLabel
                    name="profile"
                    control={<Radio />}
                    value="../assets/Ellipse9.png"
                    label={
                      <img
                        className="profile"
                        id="image4"
                        src="../assets/Ellipse9.png"
                        alt=""
                      />
                    }
                  />
                </RadioGroup>
              </div>
            </div>

            {/* Imput Gender */}
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Gender
              </FormLabel>
              <RadioGroup
                row
                value={this.state.gender}
                onChange={this.changeGenderHandler}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </div>

            {/* Input Department */}
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Department
              </FormLabel>
              {this.departments.map((department) => (
                <FormControlLabel
                  control={<Checkbox />}
                  label={department.name}
                  value={department.name}
                  onChange={this.changeDepartmentHandler}
                />
              ))}
            </div>

            {/* Imput Salary */}
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Salary
              </FormLabel>
              {/* <Slider
                valueLabelDisplay="auto"
                getAriaValueText={textValue}
                defaultValue={this.state.salary}
                step={1000}
                min={0}
                max={500000}
                // value={this.state.salary}
                onChange={this.changeSalaryHandler}/> */}
              <Box sx={{ width: 10000 }}>
                <Slider
                  valueLabelDisplay="auto"
                  defaultValue={400}
                  step={10}
                  min={300}
                  max={500}
                  // value={this.state.salary}
                  onChange={this.changeSalaryHandler}
                />
              </Box>
              {/* <Box sx={{ width: 1000 }}>
                <Slider
                  defaultValue={400000}
                  valueLabelDisplay="auto"
                  step={1000}
                  min={300000}
                  max={500000}
                  onChange={this.changeSalaryHandle}
                />
              </Box> */}
            </div>

            {/* Input StartDate */}
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Start Date
              </FormLabel>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.changeStartDateHandler}
              />
            </div>
            <div className="row-content"></div>

            {/* Input Notes */}
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Note
              </FormLabel>
              <TextareaAutosize
                value={this.state.note}
                onChange={this.changeNoteHandler}
                minRows={5}
                placeholder="Minimum 3 rows"
                style={{ width: 999 }}
              />
            </div>
            <div className="buttonParent">
              <Link to="/" className="text-link">
                {/* cancel button for cancel and go back to home page */}
                <Button className="resetButton button cancelButton">
                  Cancel
                </Button>
              </Link>
              <div className="submit-reset">
                {/* add button for add new employee to the employee payroll data */}
                <Button type="submit" className="button submitButton">
                  Submit
                </Button>
                {/* reset button for reset the values */}
                <Button type="reset" className="resetButton button">
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
