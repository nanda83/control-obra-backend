const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://mafernanda83:yINzBBVmWbYIEByq@cluster0.gbon2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

