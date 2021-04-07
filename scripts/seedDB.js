const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roadWise"
);

const userSeed = [
  {
    email: "The Dead Zone",
    password: "Stephen King",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Lord of the Flies",
    password: "William Golding",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "The Catcher in the Rye",
    password: "J.D. Salinger",
    cars:[],
     
    date: new Date(Date.now())
  },
  {
    email: "The Punch Escrow",
    password: "Tal M. Klein",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Harry Potter and the Sorcerer's Stone",
    password: "J.K. Rowling",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Coraline",
    password: "Neil Gaiman",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Code: The Hidden Language of Computer Hardware and Software",
    password: "Charles Petzold",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "The Everything Store: Jeff Bezos and the Age of Amazon",
    password: "Brad Stone",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Total Recall: My Unbelievably True Life Story",
    password: "Arnold Schwarzenegger",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    password: "Ashlee Vance",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Steve Jobs",
    password: "Walter Isaacson",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Astrophysics for People in a Hurry",
    password: "Neil deGrasse Tyson",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "1984",
    password: "George Orwell",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "Frankenstein",
    password: "Mary Shelley",
    cars:[],
      
    date: new Date(Date.now())
  },
  {
    email: "The Great Gatsby",
    password: "F. Scott Fitzgerald",
    cars:[],
      
  },
  {
    email: "Born a Crime: Stories from a South African Childhood",
    password: "Trevor Noah",
    cars:[],
      
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
