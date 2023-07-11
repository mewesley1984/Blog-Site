const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
// const loggedInroutes = require('./loggedInroutes');
router.use('/', homeRoutes);
// router.use('/loggedIn', loggedInroutes);
router.use('/api', apiRoutes);

module.exports = router;
