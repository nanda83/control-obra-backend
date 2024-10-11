const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Listado de todos los users");
});

router.get("/login", (request, response) => {
  response.send("Login");
});

router.get("/register", (request, response) => {
  response.send("Register");
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  response.send(`User con ID ${id}`);
});

router.post("/", (request, response) => {
  const body = request.body;
  console.log(body);

  response.send("Create User");
});

module.exports = router;
