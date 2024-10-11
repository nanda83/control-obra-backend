//console.log('Hello, World!');
const express = require("express");
const projectsRouter = require("./resources/projects/index");
const usersRouter = require("./resources/users/index");

const connectDB = require('./config/mongodb');

const app = express();


app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (request, response) => {
  response.send("Hola desde aquí");
});

app.get("/contacto", (request, response) => {
  response.send("Te enviare Contacto");
});

app.post("/crear-proyecto", (request, response) => {
  response.send("Proyecto Creado");
});

app.use("/projects", projectsRouter);
app.use("/users", usersRouter);

app.use('/projects', projectsRouter);

connectDB();
