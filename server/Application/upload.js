const express = require('express');
const router = express.Router();
const upload = require('../Public/upload');
const api = '/application/'

router.use(`${api}upload`, require('./Interceptor.js'))
router.post(`${api}upload`, function(req, res, next) {
  upload(req, res, next);
})
module.exports = router
