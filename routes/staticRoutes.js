// Imports 
const express = require("express");

const {handleLoginPage,handleSignupPage,} = require("../controllers/user");

const {handleMainPage, handleHomePage, } = require("../controllers/home")

const router = express.Router();

router.get("/",handleMainPage);
router.get("/homepage",handleHomePage);

router.get("/login",handleLoginPage);
router.get("/signup",handleSignupPage);


// exports 
module.exports = router;
