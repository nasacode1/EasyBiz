const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/users')

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  // You can add other CORS options as needed
};

app.use(cors(corsOptions));

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/users").then(console.log("connected")).catch(err=>console.log(err));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ Email : email })
  .then(user => {
    if (user) {
      if (user.Password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    } 
    else {
      res.json("Your email is not registered");
    }
  })
  .catch(err => res.status(500).json(err));
})
app.post('/register', (req, res) => {
  console.log(req.body)
    UsersModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json)
})

app.listen(5000, () => {
    console.log("server is running")
})
