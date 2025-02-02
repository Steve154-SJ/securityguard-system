// Imports 
const express = require("express");

const {
handleLoginPage,
handleSignupPage,

} = require("../controllers/user")

const router = express.Router();

router.get("/login",handleLoginPage);
router.get("/signup",handleSignupPage);


// exports 
module.exports = router;
