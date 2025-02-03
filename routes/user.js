//Imports

const express = require("express");
const {
handleLoginPostReq,
hanleSignupPostReq,
}= require("../controllers/user")

const router = express.Router();

router.post("/login",handleLoginPostReq);
router.post("/signup",hanleSignupPostReq);

// Exports
module.exports = router;