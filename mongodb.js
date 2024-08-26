const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:da3WO9n8C1x5IU98@cluster0.axon7.mongodb.net/Users")

const User = mongoose.model('Users', {username : String, email : String, password : String})

const user = new User({
    username : "Harkirat singh",
    email : "harkirat.singh@gmail.com",
    password : '12345'
})

user.save();