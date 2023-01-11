
const express= require("express");
const cors= require("cors");
require('./db/config');
const User = require("./db/User");

const app = express();

app.use(express.json()); //for receive data from form
app.use(cors()); //cors as middlewair
//Routes
app.post("/register",async (req,resp)=>{
    let user= new User(req.body);
    let result = await user.save();
    resp.send(result);
})



app.listen(5000);

