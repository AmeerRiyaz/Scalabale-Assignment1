//User Schema

const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  itemName:{type: String},
  itemCode:{type: String},
  price:{type: String}
  
});



module.exports = mongoose.model("Items", itemSchema);

