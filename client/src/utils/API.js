import axios from "axios";

export default {

    getUser: function(id) {
        return axios.get("/api/user/" + id);
    },
    allCars: function() {
        return axios.get('/api/cars');
    },
    login: function(userData) {
        return axios.post("/api/login", userData)
    },
    checklogin: function() {
        return axios.get("/api/login")
    },
    logout: function() {
            return axios.post("/api/logout");
        }
        // Deletes the book with the given id
        // deleteBook: function(id) {
        //   return axios.delete("/api/books/" + id);
        // },
        // Saves a book to the database
        // saveBook: function(bookData) {
        //   return axios.post("/api/books", bookData);
        // }

};