//Imports

const express = require("express");
const {
handleLoginPostReq,
handleSignupPostReq,
}= require("../controllers/user")

const router = express.Router();

router.post("/login",handleLoginPostReq);
router.post("/signup",handleSignupPostReq);

// Exports
module.exports = router;