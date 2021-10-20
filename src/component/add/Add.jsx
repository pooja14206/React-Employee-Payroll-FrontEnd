import React, { Component } from "react";
import Header from "../header/Header";
import "./Add.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Slider from "@material-ui/core/Slider";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { FormLabel } from "@material-ui/core";
import { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

export default class add extends Component {
  // keyboardDatePickerExample(props) {
  //   const [selectedDate, handleDateChange] = useState(new Date());}
  render() {
    return (
      <div>
        <Header></Header>
        <div className="form-content">
          <form className="form">
            {/* Input Name */}
            <div className="form-head">Employee Payroll form </div>
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Full Name
              </FormLabel>
              <TextField
                fullWidth
                label="Full Name"
                label="Your Name"
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
                    value="../assets/Ellipse8.png"
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
              <RadioGroup row>
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
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="HR" />
                <FormControlLabel control={<Checkbox />} label="Sales" />
                <FormControlLabel control={<Checkbox />} label="Finance" />
                <FormControlLabel control={<Checkbox />} label="Engineer" />
                <FormControlLabel control={<Checkbox />} label="Others" />
              </FormGroup>
            </div>

            {/* Imput Salary */}
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Salary
              </FormLabel>
              <Slider size="small" defaultValue={70} valueLabelDisplay="auto" />
            </div>

            {/* Input StartDate */}
            <FormLabel component="legend" className="label text">
              Start Date
            </FormLabel>
            {/* <Fragment>
              <KeyboardDatePicker
                placeholder="10/10/2018"
                minDate={new Date()}
                format="MM/dd/yyyy"
              />
            </Fragment> */}
            <div className="row-content"></div>

            {/* Input Notes */}
            <div className="row-content">
              <FormLabel component="legend" className="label text">
                Note
              </FormLabel>
              <TextareaAutosize
                minRows={5}
                placeholder="Minimum 3 rows"
                style={{ width: 999 }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
