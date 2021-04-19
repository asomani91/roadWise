import axios from "axios";

export default {
    getUser: function(id) {
        return axios.get("/api/user/" + id);
    },
    allCars: function() {
        return axios.get("/api/cars");
    },
    createCars: function(data) {
        return axios.post("/api/cars", data);
    },
    login: function(userData) {
        return axios.post("/api/login", userData);
    },
    checklogin: function() {
        return axios.get("/api/login");
    },
    logout: function() {
        return axios.post("/api/logout");
    },
    create: function(data) {
        return axios.post("/api/signup", data);
    },
};