//console.log('Hello, World!');
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const cors = require("cors");

const projectsRouter = require("./resources/projects/index");
const usersRouter = require("./resources/users/index");
const authRouter = require("./resources/auth/auth.router");
const ossRouter = require("./resources/oss/oss.router");

const connectDB = require("./config/mongodb");

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(
  {
    origin: "http://localhost:5173",
  }
));

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

//Routes
app.get("/", (request, response) => {
  response.status(200).json({
    message: "Hola desde /"
  })
  
});

app.get("/contacto", (request, response) => {
  response.send("Te enviare Contacto");
});

app.post("/crear-proyecto", (request, response) => {
  response.send("Proyecto Creado");
});

app.use("/projects", projectsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/oss", ossRouter);


connectDB();
