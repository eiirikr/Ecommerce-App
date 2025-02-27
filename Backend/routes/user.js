const express = require('express');
const userController = require("../controllers/user.js");
const { verify, verifyAdmin, isLoggedIn } = require("../auth.js");

const router = express.Router()

// User Registration
router.post("/register", userController.registerUser);

// User Log in
router.post("/login", userController.loginUser);

// Retrieve User Details
router.get("/details", verify, userController.getProfile);

// Update User as Admin
router.patch("/:id/set-as-admin", verify, verifyAdmin, userController.updateUserAsAdmin);

// Update Password
router.patch("/update-password", verify, userController.updatePassword);

module.exports = router;