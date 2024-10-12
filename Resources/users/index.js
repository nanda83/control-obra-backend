const express = require("express");

const adminMiddleware = require("../../middlewares/adminMiddleware");
const { GetAllUsers, Register, CreateUser, Login, Id } = require("./users.controller");

const router = express.Router();

router.get("/", GetAllUsers);

router.get("/login", Login);

router.get("/register", adminMiddleware, Register);

router.get("/:id", Id);

router.post("/", adminMiddleware, CreateUser);

module.exports = router;
