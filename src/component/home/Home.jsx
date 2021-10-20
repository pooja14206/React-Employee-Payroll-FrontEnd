import React, { Component } from "react";
import Header from "../header/Header";
import "./Home.css";
import employeeService from "../../service/employeeService";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.getEmployee();
  }
  
  getEmployee() {
    employeeService.getEmployee().then((response) => {
      this.emoloyeeCount = response.data.data.length;
      this.setState(
        {
          employees: response.data.data,
        },
        () => {
          console.log(this.state.employees);
        }
      );
    });
  }

  /**
   * Delete Employee from list
   * @param id
   */
  handleDeleteEmployeeClick(id) {
    employeeService.deleteEmployee(id).then((response) => {
      this.getEmployee();
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        {/* <h1>You are inside Home</h1> */}
        <div className="main-content">
          <div className="header-content">
            <div className="emp-detail-text">
              Employee Details{" "}
              <div className="emp-count">{this.emoloyeeCount}</div>
            </div>
            {/* add button redirect to the add page to add a new employee */}
            {/* <Link className="add-button" href="/add" > */}
            <div className="add-button">
              <img src="./assets/plus.png" alt="Add User Logo" />
              Add User
            </div>
            {/* </Link>     */}
            {/* </img> */}
            {/* </a> */}
          </div>
          <div className="table-main">
            <table id="table-display" className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Start Date</th>
                  <th>Notes</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      {" "}
                      <img className="profile" src={emp.profilePic} alt="" />
                    </td>
                    <td>{emp.name}</td>
                    <td>{emp.gender}</td>
                    <td>
                      {emp.department.map((dept) => (
                        <div className="dept-label">{dept}</div>
                      ))}
                    </td>
                    <td>{emp.salary}</td>
                    <td>{emp.startDate}</td>
                    <td>{emp.note}</td>
                    <td>
                    
                      <img  onClick={() => this.handleDeleteEmployeeClick(emp.id)} src="../assets/delete.svg" alt="delete" />
                      <img src="../assets/create.svg" alt="edit" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}