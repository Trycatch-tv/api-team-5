const express = require("express");
const router = express.Router();
const event_controller = require("../controllers/event.controller");

router.get('/', event_controller.index);
router.post('/', event_controller.create);
router.get('/:id', event_controller.show);
router.put('/:id', event_controller.update);
router.delete('/:id', event_controller.delete);
module.exports = router;