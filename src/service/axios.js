const Axios = require('axios').default;

const BASE_URL = "http://localhost:8080";

exports.getEmployee = (GET_URL) => { return Axios.get(BASE_URL + GET_URL);}

exports.deleteEmployee = (DELETE_URL,id) => { return Axios.delete(BASE_URL + DELETE_URL + id); }

exports.addEmployee = (POST_URL, body) => { return Axios.post(BASE_URL + POST_URL, body);}