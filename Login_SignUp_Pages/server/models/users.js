const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Email: String,
    Password: String
})

const UsersModel = mongoose.model("users", UsersSchema)
module.exports = UsersModel