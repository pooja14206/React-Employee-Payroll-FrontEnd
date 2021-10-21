import Axios from "axios";

const BASE_URL = "http://localhost:8080";
const GET_EMPLOYEE_URL = "/employeepayrollservice/get";
const DELETE_EMPLOYEE_URL = "/employeepayrollservice/delete/";

class employeeService {

    getEmployee() { return Axios.get(BASE_URL + GET_EMPLOYEE_URL);}

    deleteEmployee(id) { return Axios.delete(BASE_URL + DELETE_EMPLOYEE_URL + id); }
    
}

export default new employeeService();