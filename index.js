const express = require('express')
const app = express();
const zod = require("zod")
const jwt = require("jsonwebtoken")

app.use(express.json())
const jwtPassword = "123nkn4334"
const users = [
    {
        email : "harkirat@gmail.com",
        pass : "12345",
        name : "harkirat singh"
    },
    {
        email : "bunny@gmail.com",
        pass : "123456",
        name : "Avyukt Gupta"
    }
]

function validateuser(username, password){

    
    for(let i = 0; i < users.length; i++){
        if(users[i].email === username && users[i].pass === password){
            return true;
        }
    }

    return false;

}

app.post("/signin", (req, res) =>{
    const user = req.body.username;
    const pass = req.body.password;

    if(!validateuser(user, pass)){
        res.status(401).send('Unauthorized');
    }

    const token = jwt.sign({user}, jwtPassword)
    return res.json({
        token,
    })
})
const schema = zod.array(zod.number())

app.listen(3000);



app.post("/users", (req, res) => {
   const token = req.headers.authorization;
   const decode = jwt.verify(token, jwtPassword)

   const allusers = users
                        .map(user => user.email)
                        .filter(email => email !== decode.user)

   return res.json({
    users : allusers,
   })
   
    
})

// app.use((err, req, res, next) => {
//     res.json({
//         msg : "sth wend wrong"
//     })
// })