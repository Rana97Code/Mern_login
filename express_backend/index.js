import express from "express"
// const express = require("express")
import mongoose from "mongoose"
import cors from "cors"
 

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> {
    console.log("DB connected")
})



// Routes

app.get("/", (req, res)=>{
    res.send("My API")
})


app.post("/login", (req, res)=>{
    res.send("Ranas Login API")
})

app.post("/register", (req, res)=>{
    res.send("Ranas Register API")
})



app.listen(9002,()=>{
    console.log("Be Started at port 9002")
})