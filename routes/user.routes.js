const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user.controller");

router.post('/', user_controller.create);
router.post('/auth', user_controller.auth);
module.exports = router;