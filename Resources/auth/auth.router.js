const express = require("express");
const router = express.Router();
const { GetToken } = require("./auth.controller");	

router.get("/get-token", GetToken);

module.exports = router;
