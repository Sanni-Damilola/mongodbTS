import mongoose from "mongoose";

const url: string = "mongodb://localhost/carDB";

mongoose.connect(url);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected");
  })
  .once("error", (error) => {
    console.log("An error occured" + error);
  });
