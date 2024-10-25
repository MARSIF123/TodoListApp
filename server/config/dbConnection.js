const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      `Database connected: ${db.connection.host} ${db.connection.name}`
    );
  } catch (e) {
    console.log(`An error occured while connecting to database: ${e.message}`);
    process.exit(1);
  }
};

module.exports = dbConnect;
