const mongoose = require("mongoose");

exports.connect = () => {
  // Connecting to the database
  const MONGO_URI = "mongodb://192.168.0.52:27017/service2";


  console.log(MONGO_URI)
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      console.log("Successfully connected to database ");

    })

  

}

