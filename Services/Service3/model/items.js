//User Schema

const mongoose = require("mongoose");
  // second service 
  const secondDBUrl = 'mongodb://localhost:27017/service2';
  const secondDBConnection = mongoose.createConnection(firstDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var itemSchema = new mongoose.Schema({
  itemName:{type: String},
  itemCode:{type: String},
  price:{type: String}
  
});



module.exports = secondDBConnection.model("Items", itemSchema);

