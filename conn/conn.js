const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/To-do")
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
