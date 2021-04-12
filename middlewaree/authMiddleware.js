const jwt = require('jsonwebtoken')
const {secret} = require('../config')
const User = require('../models/User')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[0]
        if (!token) {
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
        const decodedData = jwt.verify(token, secret)
        console.log('DATA:', decodedData)

        User.findOne({_id: decodedData.id, banned: true}).then(banned => {
            if(banned) return res.status(403).json({message: "Пользователь забанен"})
            req.user = decodedData
            next()
        })
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: "Пользователь не авторизован"})
    }
};
