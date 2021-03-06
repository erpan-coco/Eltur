const express = require('express');
const passport = require('passport');
const router = express.Router();
require('./passport.js')(passport, true);
//   拦截器
router.use(function(req, res, next) {
  passport.authenticate('bearer', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.json({success: false, code: 0, message: '请登录'});
    }
    if (user){
      next();
    }
  })(req, res, next);
});

module.exports = router
