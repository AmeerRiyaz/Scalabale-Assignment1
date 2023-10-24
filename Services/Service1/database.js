const mongoose = require("mongoose");

exports.connect = () => {
  // Connecting to the database
  const MONGO_URI = "mongodb://localhost:27017/scalable";

  console.log(MONGO_URI)
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      console.log("Successfully connected to database ubf");

    })
}

