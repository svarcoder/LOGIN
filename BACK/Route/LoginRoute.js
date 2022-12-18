/** @format */

const express = require("express");
const { addUser, userLogin } = require("../Controller/Login/LoginController");
const router = express.Router();
const { myValidations } = require("../Validator/Validator");

router.post("/api-user-singup", myValidations, addUser);
router.post("/api-user-login", userLogin);

module.exports = router;
