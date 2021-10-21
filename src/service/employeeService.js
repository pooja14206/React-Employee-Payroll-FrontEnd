const httpService = require('./axios');

const GET_EMPLOYEE_URL = "/employeepayrollservice/get";
const DELETE_EMPLOYEE_URL = "/employeepayrollservice/delete/";
const ADD_EMPLOYEE_URL = "/employeepayrollservice/create";

exports.getEmployee = () => { return httpService.getEmployee(GET_EMPLOYEE_URL)}
exports.deleteEmployee = (id) => { return httpService.deleteEmployee(DELETE_EMPLOYEE_URL, id)}
exports.addEmployee = (body) => { 
    // httpHeader: {
    //     headers:{'Context-Type':'application/json'}
    // }
    // let  httpHeader={headers:{
    //     'Content-Type':'application/json'
    //     }}
    return httpService.addEmployee(ADD_EMPLOYEE_URL, body)}