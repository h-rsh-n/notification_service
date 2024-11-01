const express = require('express');
const router = express.Router();
const {pingController} = require('../../controllers')
const tickerRouter = require('./mail-routes')

router.use('/tickets',tickerRouter)
router.get('/ping',pingController.ping)

module.exports = router;