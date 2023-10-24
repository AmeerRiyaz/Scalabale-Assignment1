//User Schema

const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  
  fullname:{type:String},
  email: { type: String, unique: true },
  password: { type: String },
  mobile:{type:String},
  changePassowrd:{type:Boolean,default:false},
  order:{type:Object}
});



module.exports = mongoose.model("User", userSchema);

