import express, { urlencoded } from "express";
import UserRoutes from "./routes/UserRoutes.js";
import { getUsers } from "./Controller/UserController.js";

const app = express();

// middlewares for get data from front-end
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.get("/", getUsers);

app.use("/users", UserRoutes);

app.use("/users", (err, req, res, next) => {
  const error = err.message;
  res.send(error);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// routing
// middleware
// error handling
