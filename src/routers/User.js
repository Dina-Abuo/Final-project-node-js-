const controller = require("../controllers/User");
const router = require("express").Router();
const { authenticate, encryptPassword } = require('../middlewares/User')

router.route('/signup')
    .get(controller.renderSignup)
    .post(controller.signup ,encryptPassword)

router.route('/login')
    .get(controller.renderLogin)
    .post(controller.login ,authenticate)

router.route('/profile')
    .get(controller.renderProfile)

module.exports = router;