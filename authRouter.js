const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')

router.post('/register', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
], controller.registration)
router.post('/login', controller.login)
router.use('/getData', authMiddleware, controller.sendData)

module.exports = router
