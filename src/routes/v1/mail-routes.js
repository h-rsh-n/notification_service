const express = require('express');
const router = express.Router();
const {mailMiddleware} = require('../../middlewares');
const {mailController} = require('../../controllers');

router.post('/',mailMiddleware.validate,mailController.createTicket);

module.exports = router;