const express = require('express')
const router = express.Router()
// const User = require('../../database/models/User')
// const passport = require('../../passport')
const userController = require("./../../controllers/userController");

router.route("/:id").get(
    // console.log("message.js!!")
    userController.getMessageBody
)
router.route("/delete/:username/:id").delete(userController.deleteMessage)
module.exports = router