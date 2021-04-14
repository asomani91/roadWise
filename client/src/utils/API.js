import axios from "axios";

export default {
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getUser: function(id) {
        return axios.get("/api/user/" + id);
    },
    allCars: function() {
            return axios.get('/api/cars');
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