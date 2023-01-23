const router = require('express').Router();
const LoginRoutes = require('./login-routes');
// const postRoutes = require('./post-routes'); 

router.use('/user', LoginRoutes);
// router.use('/post', postRoutes);

module.exports = router;