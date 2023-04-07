const express = require("express");
const router = express.Router();

const event_controller = require("../controllers/event.controller");

router.get('/', event_controller.index);

router.get('/create', event_controller.create);

module.exports = router;