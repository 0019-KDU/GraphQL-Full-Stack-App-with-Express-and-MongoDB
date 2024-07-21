const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URL, {});
    console.log(`Connected ${connected.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
};
module.exports = dbConnect;
