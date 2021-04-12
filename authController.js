const User = require('./models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");
const { validationResult } = require('express-validator')
const {secret} = require("./config")

const generateAccessToken = (id) => {
    const payload = {
        id,
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}

class authController {
    async registration(req, res) {
        try {
            console.log(req.body)
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            let {username, password} = req.body;
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким именем уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            console.log(1)
            const user = new User({username, password: hashPassword})
            await user.save()
            return res.json({message: "Пользователь успешно зарегистрирован"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res) {
        try {
            console.log(req.body)
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            if(user.banned) {
                res.json({message: 'banned'})
            }
            const token = generateAccessToken(user._id)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }
    async sendData(req,res) {
        try {
            console.log(req.body.action)
            if (await User.findOne({_id: req.user.id}).banned) res.status(400).json({message: 'banned'})
            if(!req.body.action) {
                return res.json(await User.find({}, {
                    username: 1,
                    _id: 1,
                    banned: 1
                }));
            }
            let affected = req.body.data.filter(x => x.selected).map(x => x.username)
            console.log('AFFECTED:'+affected)
            console.log('BODY: ' + JSON.stringify(req.body.data))
            switch (req.body.action) {
                case 'delete':
                    console.log('DELEEEETE!!!!!!!!!!!!!!!!')
                    for(let name of affected) {
                        await User.remove({username: name});
                    } break;
                case 'block':
                    for (let name of affected) {
                        await User.find({username: name}).update({banned: true});
                    } break;
                case 'unblock':
                    for (let name of affected) {
                        await User.find({username: name}).update({banned: false});
                    } break;
            }
            return res.json(await User.find({}, {
                username: 1,
                _id: 1,
                banned: 1
            }));
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController()
