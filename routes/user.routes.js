const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user.controller");
const verifyAdmin = require('../middlewares/verify.token');

router.get('/', verifyAdmin, user_controller.index);
router.post('/', user_controller.create);
router.put('/:id', verifyAdmin, user_controller.update);
router.delete('/:id', verifyAdmin, user_controller.delete);
router.post('/auth', user_controller.auth);

module.exports = router;