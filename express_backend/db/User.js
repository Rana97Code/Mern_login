const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    user_name:String,
    user_email:String,
    user_phone:String,
    user_password:String
});

module.exports = mongoose.model("users",userSchema);