import mongoose from "mongoose";
import { app } from "../server.js";

export const DB = () => {
  mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      //   useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to the db");
      app.listen(process.env.PORT, () => {
        console.log(`the server started on http://localhost:${8001}/`);
      });
    });
};
