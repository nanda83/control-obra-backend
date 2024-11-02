const express = require("express");
const router = express.Router();
const {GetBuckets, CreateBucket} = require("./oss.controller");

router.get("/buckets", GetBuckets);
router.post("/buckets", CreateBucket);

module.exports = router;
