const express = require("express");
const router = express.Router();
const inscription_controller = require("../controllers/inscription.controller");
const verifyAdmin = require('../middlewares/verify.token');

router.get('/:event_id/:user_id', inscription_controller.create);
router.delete('/:event_id/:user_id', inscription_controller.delete);

module.exports = router;