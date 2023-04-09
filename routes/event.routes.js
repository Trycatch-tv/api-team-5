const express = require("express");
const router = express.Router();
const event_controller = require("../controllers/event.controller");
const verifyAdmin = require('../middlewares/verify.token');

router.get('/', event_controller.index);
router.post('/', verifyAdmin, event_controller.create);
router.get('/:id', event_controller.show);
router.put('/:id', verifyAdmin, event_controller.update);
router.delete('/:id', verifyAdmin, event_controller.delete);
module.exports = router;